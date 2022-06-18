import React from "react";
import { Avatar, } from "@mui/material";

export default function Avatart(imgLink, index) {
  return (
      <Avatar
        alt="hello"
        src={require(`../img/2 (${imgLink}).jpg`)}
        key={index}
      />
  );
}
