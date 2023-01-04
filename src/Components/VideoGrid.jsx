import { Box, Typography } from "@mui/material";
import React from "react";
import Videos from "./Videos";

const VideoGrid = ({
  categorySelected = "Search results for",
  videos,
  searchTerm = null,
}) => {
  return (
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        flex: 2,
        height: "90vh",
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        {categorySelected}{" "}
        <span style={{ color: "#FC1503" }}>
          {searchTerm ? `${searchTerm}` : "videos"}
        </span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default VideoGrid;
