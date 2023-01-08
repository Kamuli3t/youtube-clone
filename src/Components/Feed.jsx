import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SideBar } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import VideoGrid from "./VideoGrid";

const Feed = ({ mode }) => {
  const [categorySelected, setCategorySelected] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${categorySelected}`).then((data) => {
      setVideos(data.items);
    });
  }, [categorySelected]);

  return (
    <Stack
      sx={{
        flexDirection: { sm: "column", md: "row" },
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: { sm: "auto", md: "90vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sm: 0, md: 2 },
          width: { xs: "100vw", md: "auto" },
        }}
      >
        <SideBar
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />
        <Typography
          justifyContent="center"
          className="copyright"
          variant="body2"
          sx={{ tm: 1.5, color: "text.primary" }}
        >
          Copyright @ 2022
        </Typography>
      </Box>

      <VideoGrid
        categorySelected={categorySelected}
        videos={videos}
        mode={mode}
      />
    </Stack>
  );
};

export default Feed;
