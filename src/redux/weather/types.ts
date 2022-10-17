export interface IWeatherSliceState {
  isLoading: boolean;
  weather: IWeatherData | null;
  weeklyForecast: TDayForecast[];
  selectedHour: number | null;
  hourlyForecast: THourlyForecast[];
  search: string;
  searchedCityCoordinates: TSearchedCoordinates | null;
}
export type TSearchedCoordinates = {
  lat: number;
  lon: number;
  name: string;
};

export type TCoordinates = {
  lat: number;
  lon: number;
};

export type TMain = {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};

export type TDayForecast = {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: {
    day: number;
    eve: number;
    morn: number;
    night: number;
  };
  humidity: number;
  moon_phase: number;
  moonrise: number;
  pop: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: TTemp;
  uvi: number;
  weather: TWeather[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
};

export type THourlyForecast = {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pop: number;
  pressure: number;
  temp: number;
  uvi: number;
  weather: TWeather[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
};

export type TTemp = {
  day: number;
  eve: number;
  min: number;
  max: number;
  morn: number;
  night: number;
};

export type TSys = {
  country: string;
  sunrise: number;
  sunset: number;
};

export type TWeather = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

export type TWind = {
  deg: number;
  gust: number;
  speed: number;
};

export interface IWeatherData {
  base?: string;
  clouds?: { all: number };
  cod?: number;
  coord?: TCoordinates;
  dt?: number;
  id?: number;
  main?: TMain;
  name?: string;
  sys?: TSys;
  timezone?: number;
  visibility?: number;
  weather?: TWeather[];
  wind?: TWind;
}

export type TWeatherParams = {
  latitude: number;
  longitude: number;
};
