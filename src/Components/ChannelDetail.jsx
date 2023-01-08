import React, { useEffect, useState } from "react";

import { Videos, ChannelCard } from "./";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = ({ mode }) => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videosData, setVideosData] = useState([]);

  console.log(channelDetail, videosData);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideosData(data?.items);
      }
    );
  }, [id]);

  return (
    <Box>
      <Box>
        <div
          style={{
            minHeight: "150px",
            background:
              "linear-gradient(349deg, rgba(143,31,173,1) 0%, rgba(9,11,121,1) 40%, rgba(0,212,255,1) 100%)",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-150px" />
      </Box>
      <Box
        id="videosss"
        display="flex"
        width="100%"
        justifyContent="center"
        alignItems="center"
        p="2"
      >
        <Videos videos={videosData} mode={mode} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
