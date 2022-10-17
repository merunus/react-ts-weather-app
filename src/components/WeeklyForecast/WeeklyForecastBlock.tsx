import React from "react";
import DayCard from "./DayCard/DayCard";
import styles from "./WeeklyForecast.module.scss";
import { Paper } from "@mui/material";
import { useAppSelector } from "../../redux/store";
import { selectWeatherData } from "../../redux/weather/selectors";
import { v4 as uuidv4 } from "uuid";

const WeeklyForecastBlock: React.FC = () => {
  const { weeklyForecast, weather } = useAppSelector(selectWeatherData);
  return (
    <>
      <div className={styles.title}>Weekly Forecast</div>
      <section className={styles.container}>
        <Paper classes={{ root: styles.cardsBlock }}>
          {weeklyForecast.map((day) => {
            return (
              <DayCard
                key={uuidv4()}
                dt={day.dt}
                weather={day.weather}
                temp={day.temp}
                todayDate={weather?.dt}
              />
            );
          })}
        </Paper>
      </section>
    </>
  );
};

export default WeeklyForecastBlock;
