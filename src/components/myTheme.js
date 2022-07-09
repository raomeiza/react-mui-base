import { createTheme } from "@mui/material";
import { colorData } from "./color.data";

export default function myTheme({ mode, myColor }) {
  return createTheme({
    palette: colorData[myColor][mode]
  });
}
