import React from "react";
import { ImageListItem } from "@mui/material";

export default function ImageListItems(imgLink, index) {
  let img = require(`../img/1 (${imgLink}).jpg`)
  return (
    <ImageListItem key={index} w={5} h={5}>
      <img
        src={img}
        alt={img}
        srcSet={img}
        loading="lazy"
      />
    </ImageListItem>
  );
}
