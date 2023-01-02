import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { SideBar, Videos } from "./";

const Feed = () => {
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
        <SideBar />
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
          New <span style={{ color: "#fc1503" }}>Videos</span>
        </Typography>

        <Videos videos={[]} />
      </Box>
    </Stack>
  );
};

export default Feed;
