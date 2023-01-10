import { Search } from "@mui/icons-material";
import { IconButton, Paper, TextField } from "@mui/material";
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

  // const mode = theme.palette.mode;
  // console.log(mode);

  return (
    <Paper
      component="form"
      onSubmit={onSubmitHandler}
      elevation={3}
      sx={{
        // border: "1px solid #e3e3e3",

        borderRadius: 20,
        pl: 2,
        mr: { sm: 5 },
        alignItems: "center",
      }}
    >
      {/* <input
        ref={enteredSearchRef}
        className={`${
          mode === "light" ? "light-search" : "dark-search"
        } "search-bar"`}
        placeholder="Search..."
      /> */}

      <TextField
        // label="Search..."
        type="search"
        variant="standard"
        inputRef={enteredSearchRef}
        sx={{ mt: "3px", width: { xs: 150, sm: 250 } }}
      />
      <IconButton type="submit" sx={{ color: "red", p: "10px" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
