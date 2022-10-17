import { TWeather } from "../../../redux/weather/types";

export type THourlyCardProps = {
  dt: number;
  temp: number;
  weather: TWeather[];
  feels_like: number;
  isSelected?: boolean;
};
