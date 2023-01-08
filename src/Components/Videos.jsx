import React from "react";
import { Stack, Box } from "@mui/material";

import { VideoCard, ChannelCard } from "./";
const Videos = ({ videos, direction, mode }) => {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
      display="flex"
      marginX="auto"
      sx={{ overflowY: "auto" }}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} mode={mode} />}
          {item.id.channelId && (
            <ChannelCard channelDetail={item} mode={mode} />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
