import React from "react";
import { THourlyForecastContProps } from "./types";
import styles from "./HourlyForecast.module.scss";
import { Paper, Avatar, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import HourlyCard from "./HourlyCard/HourlyCard";
import { capitalizer } from "../../utils/capitalizer";

const HourlyForecastContainer: React.FC<THourlyForecastContProps> = ({
  data,
  handleSetSelected,
  isBigScreen,
  isSmallScreen,
  labels,
  currentHour,
  hourlyForecast,
}) => {
  return (
    <section className={styles.container}>
      {isBigScreen && (
        <Paper classes={{ root: styles.hourlyBlock }}>
          <Line
            width={"1000px"}
            height={"300px"}
            datasetIdKey="id"
            options={{
              layout: {
                padding: 0,
              },
              plugins: {
                datalabels: {
                  anchor: "end",
                  align: "top",
                  formatter(value) {
                    return Math.floor(value) + `°`;
                  },
                },
                legend: {
                  display: false,
                },
              },
              scales: {
                y: {
                  min: 0,
                  ticks: {
                    padding: 15,
                    stepSize: 3,
                    callback: function (value) {
                      return value + `°C`;
                    },
                  },
                },
              },
            }}
            data={{
              labels: labels[0],
              datasets: [
                {
                  label: "Temperature",
                  data: data[0],
                  tension: 0.2,
                  fill: true,
                  backgroundColor: "#a3c5f6fd",
                  borderColor: "#4793ff",
                  pointBorderWidth: 4,
                },
              ],
            }}
          />
        </Paper>
      )}

      {isSmallScreen && (
        <>
          <Paper classes={{ root: styles.hourInfo }}>
            <div className={styles.temp}>
              <Avatar
                src="http://openweathermap.org/img/wn/10d@2x.png"
                classes={{ root: styles.temp__icon }}
              />
              <Typography variant="h1" classes={{ root: styles.temp__number }}>
                {currentHour?.temp}
              </Typography>
              <span className={styles.degreeIcon}>°C</span>
            </div>
            <div className={styles.details}>
              <Typography variant="h4" classes={{ root: styles.details__info }}>
                {capitalizer(currentHour?.weather[0].description)}
              </Typography>
              <Typography variant="h4" classes={{ root: styles.details__info }}>
                Humidity: {currentHour?.humidity} g.m
              </Typography>
              <Typography variant="h4" classes={{ root: styles.details__info }}>
                Wind: E {currentHour?.wind_speed} kmh
              </Typography>
            </div>
          </Paper>
          <Paper classes={{ root: styles.hourlyBlock }}>
            <Swiper
              spaceBetween={10}
              slidesPerView={2.2}
              breakpoints={{
                960: {
                  slidesPerView: 11.2,
                },
                760: {
                  slidesPerView: 6.2,
                },

                550: {
                  slidesPerView: 5.2,
                },
                450: {
                  slidesPerView: 4.2,
                },
                350: {
                  slidesPerView: 3.2,
                },
              }}
            >
              {hourlyForecast.map((hour) => {
                return (
                  <SwiperSlide
                    key={uuidv4()}
                    onClick={() => handleSetSelected(hour.dt)}
                  >
                    <HourlyCard
                      isSelected={currentHour && currentHour.dt === hour.dt}
                      dt={hour.dt}
                      temp={hour.temp}
                      feels_like={hour.feels_like}
                      weather={hour.weather}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Paper>
        </>
      )}
    </section>
  );
};

export default HourlyForecastContainer;
