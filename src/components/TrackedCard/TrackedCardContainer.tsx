import React from "react";
import { TTrackedCardContProps } from "./types";
import { Avatar, Paper, Typography } from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Paths } from "../../models/paths";
import { capitalizer } from "../../utils/capitalizer";
import styles from "./TrackedCard.module.scss";

const TrackedCardContainer: React.FC<TTrackedCardContProps> = ({
  data,
  handleDeleteCity,
  name,
  lat,
  lon,
}) => {
  return (
    <Paper classes={{ root: styles.card }}>
      <div className={styles.title}>
        <Avatar
          src={
            data.weather
              ? `http://openweathermap.org/img/wn/${
                  data.weather && data.weather[0].icon
                }.png`
              : "http://openweathermap.org/img/wn/10d@2x.png"
          }
          classes={{ root: styles.title__icon }}
        />
        <Typography variant="h5" classes={{ root: styles.title__name }}>
          {name}
        </Typography>
      </div>
      <div className={styles.temp}>
        <Typography variant="h5" classes={{ root: styles.temp__main }}>
          {data.main?.temp}°
        </Typography>
        <Typography variant="h5" classes={{ root: styles.temp__feels }}>
          {data.main?.feels_like}°
        </Typography>
        <Typography variant="h5" classes={{ root: styles.temp__desc }}>
          {data.weather && capitalizer(data.weather[0].description)}
        </Typography>
      </div>
      <div className={styles.icons}>
        <Link to={`${Paths.DetailsPage}${name}/lat/${lon}/lon/${lat}`}>
          <BiLinkExternal className={styles.icons__link} />
        </Link>
        <AiOutlineDelete
          onClick={handleDeleteCity}
          className={styles.icons__trash}
        />
      </div>
    </Paper>
  );
};

export default TrackedCardContainer;
