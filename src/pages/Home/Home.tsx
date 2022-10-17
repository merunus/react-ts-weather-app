import { useEffect } from "react";
import styles from "./Home.module.scss";
import { Container } from "@mui/material";
import {
  HourlyForecastBlock,
  InfoBlock,
  InfoBlockSkeleton,
  MapBlock,
  MapBlockSkeleton,
  WeeklyForecastBlock,
} from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  fetchWeather,
  fetchForecasts,
  resetCoordinates,
  clearSearch,
} from "../../redux/weather/slice";
import {
  selectMyCoordinates,
  selectWeatherData,
} from "../../redux/weather/selectors";
import { Toaster } from "react-hot-toast";

const Home = () => {
  const dispatch = useAppDispatch();
  const { isLoading, weather } = useAppSelector(selectWeatherData);
  const coordinates = useAppSelector(selectMyCoordinates);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const params = {
        longitude,
        latitude,
      };
      if (latitude && longitude) {
        dispatch(fetchWeather(params));
        dispatch(fetchForecasts(params));
        dispatch(resetCoordinates());
      }
    });
    dispatch(clearSearch());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Container classes={{ root: styles.container }}>
        <InfoBlockSkeleton />
        <MapBlockSkeleton />
      </Container>
    );
  }

  return (
    <Container classes={{ root: styles.container }}>
      <InfoBlock {...weather} />
      <MapBlock {...coordinates} />
      <WeeklyForecastBlock />
      <HourlyForecastBlock />
      <Toaster />
    </Container>
  );
};

export default Home;
