import { THourlyForecast } from "../../redux/weather/types";

export type THourlyForecastContProps = {
  isBigScreen: boolean;
  isSmallScreen: boolean;
  currentHour?: THourlyForecast;
  labels: string[][];
  data: number[][];
  handleSetSelected: (dt: number) => void;
  hourlyForecast: THourlyForecast[];
};
