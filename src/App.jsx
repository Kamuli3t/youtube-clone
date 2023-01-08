import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import {
  Feed,
  Navbar,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./Components";

const App = () => {
  const [mode, setMode] = useState("light");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box color="background.default">
          <Navbar toggleColorMode={toggleColorMode} />
          <Routes>
            <Route path="/" exact element={<Feed mode={mode} />} />
            <Route
              path="/video/:id"
              exact
              element={<VideoDetail mode={mode} />}
            />
            <Route
              path="/channel/:id"
              exact
              element={<ChannelDetail mode={mode} />}
            />
            <Route
              path="/search/:searchTerm"
              exact
              element={<SearchFeed mode={mode} />}
            />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
