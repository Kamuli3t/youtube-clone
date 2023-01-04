import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  let enteredSearchRef = useRef(null);
  const navigate = useNavigate();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const searchTerm = enteredSearchRef.current.value;

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={onSubmitHandler}
      sx={{
        border: "1px solid #e3e3e3",
        borderRadius: 20,
        pl: 2,
        mr: { sm: 5 },
      }}
    >
      <input
        ref={enteredSearchRef}
        className="search-bar"
        placeholder="Search..."
      />
      <IconButton type="submit" sx={{ color: "red", p: "10px" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
