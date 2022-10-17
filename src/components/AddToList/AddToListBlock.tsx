import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectWeatherData } from "../../redux/weather/selectors";
import toast from "react-hot-toast";
import { addCityToList, deleteCityFromList } from "../../redux/user/slice";
import { selectUserData } from "../../redux/user/selectors";
import AddToListContainer from "./AddToListContainer";

const AddToListBlock: React.FC = () => {
  const dispatch = useAppDispatch();
  const { list } = useAppSelector(selectUserData);
  const { weather } = useAppSelector(selectWeatherData);
  const isTracked = list.find((item) => {
    if (weather && weather.id) return item.id === weather.id;
    return false;
  });

  const handleAddToList = () => {
    if (weather) {
      const alreadyAdded = list.find((item) => item.id === weather.id);
      if (alreadyAdded) {
        weather.id && dispatch(deleteCityFromList(weather.id));
        return;
      }
      if (weather.id && weather.coord) {
        dispatch(
          addCityToList({
            id: weather.id,
            lat: weather.coord?.lat,
            lon: weather.coord?.lon,
          })
        );
        toast.success(`Tracked`);
      }
    }
  };

  return (
    <AddToListContainer
      handleAddToList={handleAddToList}
      isTracked={isTracked}
    />
  );
};

export default AddToListBlock;
