import { IWeatherData } from "../../redux/weather/types";

export type TTrackedCardProps = {
  id: number;
  lat: number;
  lon: number;
};

export type TTrackedCardContProps = {
  data: IWeatherData;
  name: string;
  handleDeleteCity: (e: React.MouseEvent<SVGElement>) => void;
  lon: number;
  lat: number;
};
