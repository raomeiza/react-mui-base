import React from "react";
import { ImageListItem } from "@mui/material";

export default function ImageListItems(imgLink) {
  return (
    <ImageListItem key={imgLink} w={5} h={5}>
      <img
        src=""
        alt={`http://127.0.0.1:5500/src/img/1%20(${imgLink}).jpg`}
        srcSet={`http://127.0.0.1:5500/src/img/1%20(${imgLink}).jpg`}
        loading="lazy"
      />
    </ImageListItem>
  );
}
