import React from "react";
import moment from "moment";
import temp from "../../assets/images/temp.svg";
import precip from "../../assets/images/precipitation.svg";
import wind_image from "../../assets/images/wind.svg";
import pressure from "../../assets/images/pressure.svg";
import bg_image from "../../assets/images/background-image.svg";
import { Paper, Typography } from "@mui/material";
import styles from "./InfoBlock.module.scss";
import { IInfoBlockProps } from "./types";
import { capitalizer } from "../../utils/capitalizer";

const InfoBlock: React.FC<IInfoBlockProps> = ({
  city,
  main,
  weather,
  wind,
  name,
}) => {
  return (
    <section className={styles.infoBlock}>
      <Paper classes={{ root: styles.mainInfo }}>
        <div className={styles.mainInfo__top}>
          <div className={styles.titles}>
            <Typography variant="h2" classes={{ root: styles.titles__temp }}>
              {main?.temp}°
            </Typography>
            <Typography variant="h5" classes={{ root: styles.titles__day }}>
              {moment(moment()).format("dddd")}
            </Typography>
          </div>
        </div>
        <div className={styles.mainInfo__bottom}>
          <div className={styles.currentInfo}>
            <Typography
              variant="h5"
              classes={{ root: styles.currentInfo__date }}
            >
              {moment(moment(), "Ukraine/Kiev").format("DD MMMM YYYY HH:mm")}
            </Typography>
            <Typography
              variant="h5"
              classes={{ root: styles.currentInfo__date }}
            >
              {city ? city : name}
            </Typography>
          </div>
        </div>
      </Paper>
      <Paper classes={{ root: styles.extraInfo }}>
        <ul className={styles.rows}>
          <li className={styles.row}>
            <div className={styles.row__icon}>
              <img src={temp} alt="temperature" />
            </div>
            <Typography variant="h5" classes={{ root: styles.row__type }}>
              Temperature
            </Typography>
            <Typography variant="h5" classes={{ root: styles.row__text }}>
              {main?.temp}° feels like {main?.feels_like}°
            </Typography>
          </li>
          <li className={styles.row}>
            <div className={styles.row__start}>
              <div className={styles.row__icon}>
                <img src={pressure} alt="pressure" />
              </div>
              <Typography variant="h5" classes={{ root: styles.row__type }}>
                Pressure
              </Typography>
            </div>
            <Typography variant="h5" classes={{ root: styles.row__text }}>
              {main && main.pressure} hPa
            </Typography>
          </li>
          <li className={styles.row}>
            <div className={styles.row__icon}>
              <img src={precip} alt="Precipitation" />
            </div>
            <Typography variant="h5" classes={{ root: styles.row__type }}>
              Precipitation
            </Typography>
            <Typography variant="h5" classes={{ root: styles.row__text }}>
              {weather && capitalizer(weather[0].description)}
            </Typography>
          </li>
          <li className={styles.row}>
            <div className={styles.row__icon}>
              <img src={wind_image} alt="wind" />
            </div>
            <Typography variant="h5" classes={{ root: styles.row__type }}>
              Wind
            </Typography>
            <Typography variant="h5" classes={{ root: styles.row__text }}>
              E {wind?.speed} kmh
            </Typography>
          </li>
        </ul>
        <img src={bg_image} alt="background" className={styles.bg_image} />
      </Paper>
    </section>
  );
};

export default InfoBlock;
