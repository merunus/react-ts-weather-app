import { IWeatherData } from "../../redux/weather/types";

export const addWeatherToLocalStorage = (data: IWeatherData) => {
  localStorage.setItem("weather", JSON.stringify(data));
};

export const addCityToLocalStorage = (data: any) => {
  localStorage.setItem("list", JSON.stringify(data));
};
