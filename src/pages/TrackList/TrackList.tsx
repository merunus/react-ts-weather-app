import { Button, Container, Typography } from "@mui/material";
import TrackedCard from "../../components/TrackedCard/TrackedCard";
import { useAppSelector } from "../../redux/store";
import { selectUserData } from "../../redux/user/selectors";
import styles from "./TrackList.module.scss";
import { v4 as uuidv4 } from "uuid";
import noCitiesImg from "../../assets/images/no-cities.svg";
import { Link } from "react-router-dom";
import { Paths } from "../../models/paths";
const TrackList = () => {
  const { list } = useAppSelector(selectUserData);
  return (
    <Container classes={{ root: styles.container }}>
      <div className={styles.header}>Tracked Cities</div>
      {!list.length && (
        <div className={styles.noCities}>
          <img
            className={styles.noCities__image}
            src={noCitiesImg}
            alt="no-cities"
          />
          <Typography classes={{ root: styles.noCities__text }} variant="h4">
            You don't have <br />
            tracked cities
          </Typography>
          <Link to={Paths.Home}>
            <Button classes={{ root: styles.noCities__btn }} variant="outlined">
              Back to dashboard
            </Button>
          </Link>
        </div>
      )}

      {list.map((item) => {
        return <TrackedCard key={uuidv4()} {...item} />;
      })}
    </Container>
  );
};

export default TrackList;
