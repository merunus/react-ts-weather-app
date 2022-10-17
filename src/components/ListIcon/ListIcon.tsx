import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Paths } from "../../models/paths";
import styles from "./ListIcon.module.scss";
const ListIcon: React.FC = () => {
  return (
    <Link to={Paths.TrackList}>
      <div className={styles.container}>
        <div className={styles.iconCont}>
          <AiOutlineUnorderedList />
        </div>
      </div>
    </Link>
  );
};

export default ListIcon;
