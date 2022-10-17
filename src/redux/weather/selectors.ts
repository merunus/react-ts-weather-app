import { RootState } from "../store";

export const selectWeatherData = (state: RootState) => state.weather;

export const selectMyCoordinates = (state: RootState) =>
  state.weather.weather?.coord;
