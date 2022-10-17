import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Thunks } from "../../models/thunks";
import { IWeatherSliceState, TWeatherParams } from "./types";
import axios from "axios";
import { getDataFromLocalStorage } from "../../utils/local-storage/getDataFromLc";
import { addWeatherToLocalStorage } from "../../utils/local-storage/addDataToLc";
import toast from "react-hot-toast";

export const fetchWeather = createAsyncThunk(
  Thunks.Weather,
  async (params: TWeatherParams, thunkAPI) => {
    try {
      const { latitude, longitude } = params;
      const url = process.env.REACT_APP_API_MAIN_URL as string;
      const key = process.env.REACT_APP_API_KEY as string;
      const { data } = await axios.get(
        `${url}?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`
      );
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("There was an error!");
    }
  }
);

export const fetchCityCoordinates = createAsyncThunk(
  Thunks.FetchCoordinates,
  async (city: string, thunkAPI) => {
    try {
      const url = process.env.REACT_APP_API_GEO_URL as string;
      const key = process.env.REACT_APP_API_KEY as string;
      const { data } = await axios.get(`${url}?q=${city}&appid=${key}`);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("There was an error!");
    }
  }
);

export const fetchCityName = createAsyncThunk(
  Thunks.FetchCityName,
  async (params: TWeatherParams, thunkAPI) => {
    try {
      const { latitude, longitude } = params;
      const url = process.env.REACT_APP_API_REVERSE_GEO_URL as string;
      const key = process.env.REACT_APP_API_KEY as string;
      const { data } = await axios.get(
        `${url}?lat=${latitude}&lon=${longitude}&appid=${key}`
      );
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("There was an error!");
    }
  }
);

export const fetchForecasts = createAsyncThunk(
  Thunks.Forecasts,
  async (params: TWeatherParams, thunkAPI) => {
    try {
      const { latitude, longitude } = params;
      const url = process.env.REACT_APP_API_ONE_CALL_URL as string;
      const key = process.env.REACT_APP_API_KEY as string;
      const { data } = await axios.get(
        `${url}?lat=${latitude}&lon=${longitude}&units=metric&appid=${key}`
      );
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("There was an error!");
    }
  }
);

const initialState: IWeatherSliceState = {
  isLoading: false,
  weather: getDataFromLocalStorage("weather"),
  weeklyForecast: [],
  hourlyForecast: [],
  selectedHour: null,
  search: "",
  searchedCityCoordinates: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    resetCoordinates: (state) => {
      state.searchedCityCoordinates = null;
    },
    setSelectedHour: (state, { payload }: PayloadAction<number>) => {
      state.selectedHour = payload;
    },
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
    clearSearch: (state) => {
      state.search = "";
    },
  },

  extraReducers: (builder) => {
    // My Weather Main Data

    builder.addCase(fetchWeather.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWeather.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.weather = payload;
      addWeatherToLocalStorage(payload);
    });
    builder.addCase(fetchWeather.rejected, (state) => {
      state.isLoading = false;
    });

    // My Weekly Forecast

    builder.addCase(fetchForecasts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchForecasts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.weeklyForecast = payload.daily;
      state.hourlyForecast = payload.hourly;
      state.selectedHour = payload.hourly[0].dt;
      console.log(payload);
    });

    builder.addCase(fetchForecasts.rejected, (state) => {
      state.isLoading = false;
    });

    // Fetch Coordinates
    builder.addCase(fetchCityCoordinates.fulfilled, (state, action) => {
      const search = action.meta.arg;
      if (!action.payload.length) {
        toast.error(`There is no such city as a ${search}`);
        return;
      }
      const coordinates = {
        lat: action.payload[0].lat,
        lon: action.payload[0].lon,
        name: action.payload[0].name,
      };
      state.searchedCityCoordinates = coordinates;
    });
  },
});
export const { setSelectedHour, setSearch, resetCoordinates, clearSearch } =
  weatherSlice.actions;

export default weatherSlice.reducer;
