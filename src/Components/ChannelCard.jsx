import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoProfilePicture } from "../utils/constants";
import nFormatter from "../utils/nFormatter";

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      // boxShadow: "none",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "356px", md: "320px" },
      height: "326px",
      marginX: "auto",
      marginTop,
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "text.primary",
        }}
      >
        <CardMedia
          image={
            channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            mb: 2,
            border: "1px solid #e3e3e3",
          }}
        />
        <Typography variant="h6">
          {channelDetail?.snippet?.title}{" "}
          <CheckCircleIcon
            sx={{ fontSize: "14px", color: "text.primary", ml: "5px" }}
          />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography
            sx={{ fontSize: "15px", fontWeight: 500, color: "text.secondary" }}
          >
            {nFormatter(
              parseInt(channelDetail?.statistics?.subscriberCount),
              1
            )}{" "}
            Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
