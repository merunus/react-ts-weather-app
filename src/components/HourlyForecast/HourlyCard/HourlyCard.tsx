import { Avatar, Paper, Typography } from "@mui/material";
import React from "react";
import styles from "./HourlyCard.module.scss";
import { THourlyCardProps } from "./types";
import moment from "moment";
const HourlyCard: React.FC<THourlyCardProps> = ({
  dt,
  feels_like,
  temp,
  weather,
  isSelected,
}) => {
  return (
    <Paper
      classes={{
        root: `${
          isSelected ? `${styles.card} ${styles.selected}` : styles.card
        }`,
      }}
    >
      <Typography variant="h3" classes={{ root: styles.time }}>
        {moment.unix(dt).format("HH:mm")}
      </Typography>
      <div className={styles.iconCircle}>
        <Avatar
          src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
          classes={{ root: styles.icon }}
        />
      </div>
      <Typography variant="h4" classes={{ root: styles.temp_main }}>
        {temp}°
      </Typography>
      <Typography variant="h5" classes={{ root: styles.temp_second }}>
        {feels_like}°
      </Typography>
    </Paper>
  );
};

export default HourlyCard;
