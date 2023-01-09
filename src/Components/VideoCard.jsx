import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
  mode,
}) => {
  return (
    <Card sx={{ width: { md: "320px", xs: "380px" } }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: { md: "320px", xs: "380px" },
            height: 180,
            mt: "2px",
          }}
        />
      </Link>
      <CardContent
        sx={{
          backgroundColor: `${mode === "dark" ? "#1e1e1e" : "grey.200"}`,
          height: "106px",
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            color="text.primary"
            variant="subtitle1"
            fontWeight="bold"
            sx={{ lineHeight: 1 }}
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography color="text.secondary" variant="subtitle2">
            {snippet?.channelTitle}
            <CheckCircleIcon
              sx={{
                fontSize: "12px",
                color: "text.secondary",
                ml: "5px",
                mt: "10px",
              }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
