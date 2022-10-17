import React from "react";
import styles from "./InfoBlock.module.scss";
import { Skeleton } from "@mui/material";

const InfoBlockSkeleton: React.FC = () => {
  return (
    <section className={styles.infoBlock}>
      <Skeleton classes={{ root: styles.skeleton_mainInfo }} />
      <Skeleton classes={{ root: styles.skeleton_extraInfo }} />
    </section>
  );
};

export default InfoBlockSkeleton;
