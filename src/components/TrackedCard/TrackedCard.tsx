import React, { useEffect, useState } from "react";

import { useAppDispatch } from "../../redux/store";
import { deleteCityFromList } from "../../redux/user/slice";
import { fetchCityName, fetchWeather } from "../../redux/weather/slice";
import { IWeatherData } from "../../redux/weather/types";
import TrackedCardContainer from "./TrackedCardContainer";

import { TTrackedCardProps } from "./types";

const TrackedCard: React.FC<TTrackedCardProps> = ({ id, lat, lon }) => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<IWeatherData>({});
  const [name, setName] = useState("");

  useEffect(() => {
    if (lat && lon) {
      dispatch(fetchCityName({ longitude: lon, latitude: lat })).then(
        (response) => setName(response.payload[0].name)
      );
      dispatch(fetchWeather({ latitude: lat, longitude: lon })).then(
        (response) => setData(response.payload)
      );
    }
  }, [dispatch, lat, lon]);

  const handleDeleteCity = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this city?"))
      dispatch(deleteCityFromList(id));
  };

  return (
    <TrackedCardContainer
      handleDeleteCity={handleDeleteCity}
      name={name}
      data={data}
      lon={lon}
      lat={lat}
    />
  );
};

export default TrackedCard;
