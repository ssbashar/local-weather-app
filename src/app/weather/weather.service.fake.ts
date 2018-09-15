import { IWeatherService } from "./iweather-service";
import { ICurrentWeather } from "../icurrent-weather";
import { Observable, of } from "../../../node_modules/rxjs";

export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: 'Bursa',
    country: 'TR',
    date: 1285789600,
    image: '',
    temperature: 280.32,
    description: 'light intensity drizzle',
  }

  public getCurrentWeather(city: string | number, country?: string):
  Observable<ICurrentWeather>{
    return of(this.fakeWeather);
  }
}
