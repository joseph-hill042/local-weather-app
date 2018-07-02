import { Component } from '@angular/core'
import { ICurrentWeather } from './interfaces'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentWeather: ICurrentWeather
  constructor() {}

  doSearch(weatherSearch) {
    this.currentWeather = weatherSearch
  }
}
