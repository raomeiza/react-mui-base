import React, { useEffect } from "react";
import { Box, } from "@mui/material";
import FeedCard from "./FeedCard";

const Feed = function({clientScreen, imgLink}) {
  useEffect(() => {
    window.scroll(0,0)
  }, [  ])
  
  return (
    <Box 
      alignContent="center"
      sx={{
        margin:{ xs:1, sm:1}
      }}
    >
      {
        imgLink.map((value) => (
          FeedCard(value)
        ))
      }
    </Box>
  );
};

export default Feed;
