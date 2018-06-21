import { TestBed, async } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { WeatherService } from './weather/weather.service'
import { WeatherServiceFake } from './weather/weather.service.fake'
import { MaterialModule } from './material.module'
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CurrentWeatherComponent],
      providers: [{ provide: WeatherService, useClass: WeatherServiceFake }],
      imports: [MaterialModule],
    }).compileComponents()
  }))
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
})
