import React from "react";
import { TAddToListContProps } from "./types";
import { Paper, Typography } from "@mui/material";
import styles from "./AddToList.module.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

const AddToListContainer: React.FC<TAddToListContProps> = ({
  handleAddToList,
  isTracked,
}) => {
  return (
    <Paper classes={{ root: styles.container }}>
      <div
        onClick={handleAddToList}
        className={`${styles.iconCont} ${isTracked && styles.tracked}`}
      >
        {isTracked ? <TiTick /> : <AiOutlinePlus />}
      </div>
      <Typography classes={{ root: styles.text }} variant="h3">
        {isTracked ? "Already tracked" : "Add city to your track list"}
      </Typography>
    </Paper>
  );
};

export default AddToListContainer;
