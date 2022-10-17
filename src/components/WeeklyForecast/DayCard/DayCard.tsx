import React from "react";
import { TDayCardProps } from "./types";
import styles from "./DayCard.module.scss";
import { Avatar, Card, Typography } from "@mui/material";
import moment from "moment";
import { capitalizer } from "../../../utils/capitalizer";

const DayCard: React.FC<TDayCardProps> = ({ dt, temp, weather, todayDate }) => {
  return (
    <Card classes={{ root: styles.card }}>
      <Typography variant="h5" classes={{ root: styles.day }}>
        {todayDate &&
        moment.unix(dt).format("DD MMMM YYYY") ===
          moment.unix(todayDate).format("DD MMMM YYYY")
          ? "Today"
          : moment.unix(dt).format("dddd")}
      </Typography>
      <Typography variant="h5" classes={{ root: styles.date }}>
        {moment.unix(dt).format("DD MMM")}
      </Typography>
      <Avatar
        src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
        classes={{ root: styles.icon }}
      />
      <Typography variant="h5" classes={{ root: styles.temp_max }}>
        +{temp.max}°
      </Typography>
      <Typography variant="h5" classes={{ root: styles.temp_feels }}>
        +{temp.day}°
      </Typography>
      <Typography variant="h5" classes={{ root: styles.description }}>
        {capitalizer(weather[0].description)}
      </Typography>
    </Card>
  );
};

export default DayCard;
