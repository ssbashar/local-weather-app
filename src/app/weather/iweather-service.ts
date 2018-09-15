import { ICurrentWeather } from "../icurrent-weather";
import { Observable } from "../../../node_modules/rxjs";

export interface IWeatherService{
  getCurrentWeather(search: string | number, country?: string):
  Observable<ICurrentWeather>
}