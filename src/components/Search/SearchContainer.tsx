import React from "react";
import { TSearchContProps } from "./types";
import styles from "./Search.module.scss";
import { TextField, InputAdornment, Button } from "@mui/material";
import { IoSearch } from "react-icons/io5";
const SearchContainer: React.FC<TSearchContProps> = ({handleChange,handleSubmit, search}) => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <TextField
            id="input-with-icon-textfield"
            placeholder="Find city"
            value={search}
            onChange={(e) => handleChange(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IoSearch />
                </InputAdornment>
              ),
            }}
            autoComplete="off"
            variant="outlined"
          />
          <Button
            variant="outlined"
            type="submit"
            classes={{ root: styles.button }}
          >
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SearchContainer;
