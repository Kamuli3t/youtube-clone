import React, { useEffect, useState } from "react";
import VideoGrid from "./VideoGrid";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = ({ mode }) => {
  const { searchTerm } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return <VideoGrid searchTerm={`${searchTerm}`} videos={videos} mode={mode} />;
};

export default SearchFeed;
