import React from "react";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectWeatherData } from "../../redux/weather/selectors";
import "swiper/css";
import { useMediaQuery } from "react-responsive";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { setSelectedHour } from "../../redux/weather/slice";
import HourlyForecastContainer from "./HourlyForecastContainer";
Chart.register(...registerables);
Chart.register(ChartDataLabels);

const HourlyForecastBlock: React.FC = () => {
  const dispatch = useAppDispatch();
  const { hourlyForecast, selectedHour } = useAppSelector(selectWeatherData);
  const isBigScreen = useMediaQuery({ minWidth: 800 });
  const isSmallScreen = useMediaQuery({ maxWidth: 800 });

  const currentHour = hourlyForecast.find((hour) => hour.dt === selectedHour);

  const labels = [
    hourlyForecast
      .filter((_, index) => index % 3 === 0)
      .map((hour) => {
        return moment.unix(hour.dt).format("HH:mm");
      }),
  ];

  const data = [
    hourlyForecast.map((hour) => {
      return hour.temp;
    }),
  ];

  const handleSetSelected = (dt: number) => {
    dispatch(setSelectedHour(dt));
  };

  return (
    <HourlyForecastContainer
      data={data}
      handleSetSelected={handleSetSelected}
      labels={labels}
      currentHour={currentHour}
      isBigScreen={isBigScreen}
      isSmallScreen={isSmallScreen}
      hourlyForecast={hourlyForecast}
    />
  );
};

export default HourlyForecastBlock;
