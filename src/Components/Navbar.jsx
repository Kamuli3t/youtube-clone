import React from "react";

import { Stack } from "@mui/material";
import { logo } from "../utils/constants";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import ModeSwitch from "./ModeSwitch";

const Navbar = (props) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      zIndex={10}
      sx={{
        position: "sticky",
        backgroundColor: "background.default",
        top: 0,
        justifyContent: "space-between",
        borderBottom: "1px solid red",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <Stack direction="row" alignItems="center">
        <SearchBar style={{ display: "flex" }} />
        <ModeSwitch onClick={props.toggleColorMode} />
      </Stack>
    </Stack>
  );
};

export default Navbar;
