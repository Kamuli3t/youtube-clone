import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SideBar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
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
          height: { sm: "auto", md: "95vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sm: 0, md: 2 },
        }}
      >
        <SideBar
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ tm: 1.5, color: "#fff" }}
        >
          Copyright @ 2022
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 2,
          height: "90vh",
          px: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {`${categorySelected}`}{" "}
          <span style={{ color: "#fc1503" }}>Videos</span>
        </Typography>

        <Videos videos={videos} setVideos={setVideos} />
      </Box>
    </Stack>
  );
};

export default Feed;
