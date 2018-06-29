import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { APPID, baseUrl } from '../../environments/environment'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ICurrentWeather } from '../interfaces'

interface ICurrentWeatherData {
  weather: [
    {
      description: string
      icon: string
    }
  ]
  main: {
    temp: number
  }
  sys: {
    country: string
  }
  dt: number
  name: string
}

export interface IWeatherService {
  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather>,
  getCurrentWeatherByCoords(coords: Coordinates): Observable<ICurrentWeather>
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService implements IWeatherService {
  constructor(private httpClient: HttpClient) {}

  private static transformToICurrentWeather(
    data: ICurrentWeatherData
  ): ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `${baseUrl}openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: WeatherService.convertKelvinToFahrenheit(data.main.temp),
      description: data.weather[0].description,
    }
  }

  private static convertKelvinToFahrenheit(kelvin: number): number {
    return (kelvin * 9) / 5 - 459.67
  }

  private getCurrentWeatherHelper(
    uriParams: string
  ): Observable<ICurrentWeather> {
    return this.httpClient
      .get<ICurrentWeatherData>(
        `${baseUrl}api.openweathermap.org/data/2.5/weather?${uriParams}&appid=${APPID}`
      )
      .pipe(map(data => WeatherService.transformToICurrentWeather(data)))
  }

  getCurrentWeather(
    search: string | number,
    country?: string
  ): Observable<ICurrentWeather> {
    let uriParams = ''
    if (typeof search === 'string') {
      uriParams = `q=${search}`
    } else {
      uriParams = `zip=${search}`
    }

    if (country) {
      uriParams = `${uriParams},${country}`
    }

    return this.getCurrentWeatherHelper(uriParams)
  }

  getCurrentWeatherByCoords(coords: Coordinates): Observable<ICurrentWeather> {
    const uriParams = `lat=${coords.latitude}&lon=${coords.longitude}`
    return this.getCurrentWeatherHelper(uriParams)
  }
}
