/**
 * @Interface CurrentWeather
 * Represents the current weather
 * @property city string
 * @property country string
 * @property date number
 * @property image string
 * @property temperature number
 * @property description string
 */
export interface ICurrentWeather {
  city: string
  country: string
  date: number
  image: string
  temperature: number
  description: string
}
