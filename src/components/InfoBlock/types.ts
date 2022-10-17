import { IWeatherData } from "../../redux/weather/types";

export interface IInfoBlockProps extends IWeatherData {
  city?: string;
}
