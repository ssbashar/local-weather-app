import { ICurrentWeather } from "../icurrent-weather";
import { Observable } from "../../../node_modules/rxjs";

export interface IWeatherService{
  getCurrentWeather(city: string, country: string):
  Observable<ICurrentWeather>
}