import React from "react";

import { Stack } from "@mui/material";
import { logo } from "../utils/constants";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    zIndex={10}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar style={{ display: "flex" }} />
  </Stack>
);

export default Navbar;
