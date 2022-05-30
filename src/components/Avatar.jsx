import React from "react";
import { Avatar, } from "@mui/material";

export default function Avatart(imgLink) {
  return (
      <Avatar
        alt="hello"
        src={`http://localhost:5500/src/img/2 (${imgLink}).jpg`}
        key={imgLink}
      />
  );
}
