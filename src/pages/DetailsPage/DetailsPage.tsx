import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import {
  AddToListBlock,
  HourlyForecastBlock,
  InfoBlock,
  InfoBlockSkeleton,
  MapBlock,
  MapBlockSkeleton,
  WeeklyForecastBlock,
} from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectWeatherData } from "../../redux/weather/selectors";
import { fetchForecasts, fetchWeather } from "../../redux/weather/slice";
import styles from "./DetailsPage.module.scss";

const DetailsPage = () => {
  const { cityName, lat, lon } = useParams();
  const { isLoading, weather } = useAppSelector(selectWeatherData);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    const params = {
      longitude: Number(lat),
      latitude: Number(lon),
    };
    if (params.longitude && params.latitude) {
      dispatch(fetchWeather(params));
      dispatch(fetchForecasts(params));
    }
  }, [dispatch, lat, lon]);

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
      <InfoBlock {...weather} city={cityName} />
      <AddToListBlock />
      <MapBlock lon={Number(lat)} lat={Number(lon)} />
      <WeeklyForecastBlock />
      <HourlyForecastBlock />
      <Toaster />
    </Container>
  );
};

export default DetailsPage;
