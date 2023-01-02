import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React from "react";

const SearchBar = () => (
  <Paper
    component="form"
    onSubmit={() => {}}
    sx={{
      border: "1px solid #e3e3e3",
      borderRadius: 20,
      pl: 2,
      mr: { sm: 5 },
    }}
  >
    <input
      className="search-bar"
      placeholder="Search..."
      value=""
      onChange={() => {}}
    />
    <IconButton type="submit" sx={{ color: "red", p: "10px" }}>
      <Search />
    </IconButton>
  </Paper>
);
export default SearchBar;
