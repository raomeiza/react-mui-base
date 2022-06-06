import React from "react";
import { Box, } from "@mui/material";
import FeedCard from "./FeedCard";

const Feed = function(imgLink) {
  const feeds = [1,2,3,4,5,6,7,8,9,11,12,13,15,14,16,17,18,19,20]
  return (
    <Box flex={4} bgcolor="background.default">
      {
        feeds.map((value) => (
          FeedCard(value)
        ))
      }
    </Box>
  );
};

export default Feed;
