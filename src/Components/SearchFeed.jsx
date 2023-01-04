import React, { useEffect, useState } from "react";
import VideoGrid from "./VideoGrid";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const { searchTerm } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return <VideoGrid searchTerm={`${searchTerm}`} videos={videos} />;
};

export default SearchFeed;
