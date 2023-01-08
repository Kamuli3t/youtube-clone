import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { CheckCircle } from "@mui/icons-material";
import nFormatter from "../utils/nFormatter";
import Videos from "./Videos";

const VideoDetail = ({ mode }) => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <Box minHeight="95vh" width="100%">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              width="100%"
              height="70vh"
              controls
            />
            <Typography
              color="text.primary"
              variant="h5"
              fontWeight="bold"
              p={2}
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              color="text.secondary"
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="grey"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "grey", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography varient="body1" opacity="0.7">
                  {nFormatter(viewCount, 1)} views
                </Typography>
                <Typography varient="body1" opacity="0.7">
                  {nFormatter(likeCount, 1)} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Box flex={1}></Box>
        </Box>
        <Box
          justifyContent="center"
          alignItems="center"
          px={2}
          py={{ md: 1, xs: 5 }}
        >
          <Videos videos={videos} mode={mode} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
