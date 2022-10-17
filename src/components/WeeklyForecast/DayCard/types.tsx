import { TTemp, TWeather } from "../../../redux/weather/types";

export type TDayCardProps = {
  dt: number;
  weather: TWeather[];
  temp: TTemp;
  todayDate?: number;
};
