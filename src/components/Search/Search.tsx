import React from "react";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchCityCoordinates, setSearch } from "../../redux/weather/slice";
import { selectWeatherData } from "../../redux/weather/selectors";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../models/paths";
import toast from "react-hot-toast";
import SearchContainer from "./SearchContainer";

const Search: React.FC = React.memo(() => {
  const { search } = useAppSelector(selectWeatherData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (search: string) => {
    dispatch(setSearch(search));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    dispatch(fetchCityCoordinates(search)).then((response) => {
      if (response.payload.length) {
        const name = response.payload[0].name;
        const latitude = response.payload[0].lon;
        const longitude = response.payload[0].lat;
        console.log(name, latitude, longitude);
        if (name && latitude && longitude)
          navigate(
            `${Paths.DetailsPage}${name}/lat/${latitude}/lon/${longitude}`
          );
        toast.success(`Switched to ${name}`);
      }
    });
  };

  return (
    <SearchContainer
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      search={search}
    />
  );
});

export default Search;
