import React from "react";
import Search from "../Search/Search";
import styles from "./Navbar.module.scss";
import { Container, Avatar, Typography } from "@mui/material";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { Paths } from "../../models/paths";

const Navbar: React.FC = () => {
  return (
    <Container classes={{ root: styles.container }}>
      <Link to={Paths.Home} className={styles.logo}>
        <Avatar src={logo} classes={{ root: styles.image }} />
        <Typography variant="h3" classes={{ root: styles.title }}>
          React Weather
        </Typography>
      </Link>
      <Search />
    </Container>
  );
};

export default Navbar;
