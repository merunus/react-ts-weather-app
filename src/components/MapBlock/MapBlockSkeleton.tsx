import React from "react";
import { Skeleton } from "@mui/material";
import styles from "./MapBlock.module.scss";

const MapBlockSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <Skeleton classes={{ root: styles.skeleton }} />
    </div>
  );
};

export default MapBlockSkeleton;
