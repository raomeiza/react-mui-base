import { createTheme } from "@mui/material";

export default function myTheme({ mode, myColor }) {
  return createTheme({
    palette: {
      ...(myColor === "blue" && {
        primary: {
          ...(mode === "dark"
            ? {
                main: "#1e1e7b",
              }
            : {
                main: "#3366cc",
              }),
        },
        secondary: {
          ...(mode === "dark"
            ? {
                main: "#c",
              }
            : {
                main: "#3366cc",
              }),
        },
        background: {
          ...(mode === "dark"
            ? {
                default: "#0f0f3d",
                paper: "#3366cc",
              }
            : {
                default: "#d6e0f5",
                paper: "#3366cc",
                // paper: ""
              }),
        },
        text: {
          ...(mode === "dark"
            ? {
                primary: "#fff",
                secondary: "#ccccff",
              }
            : {
                primary: "#fff",
                secondary: "#0f0f3d",
              }),
        },
      }),
      ...(myColor === "purple" && {
        primary: {
          ...(mode === "dark"
            ? {
                main: "#600080",
              }
            : {
                main: "#600080",
              }),
        },
        secondary: {
          ...(mode === "dark" && {
            main: "#9900cc",
          }),
          ...(mode === "light" && {
            main: "#0000e6",
          }),
        },
        background: {
          ...(mode === "dark"
            ? {
                default: "#13001a",
                paper: "#39004d",
              }
            : {
                paper: "#df80ff",
              }),
        },
        text: {
          ...(mode === "dark"
            ? {
                primary: "#fff",
                secondary: "#adadeb",
              }
            : {
                primary: "#fff",
                secondary: "#600080",
              }),
        },
      }),
      ...(myColor === "magenta" && {
        primary: {
          ...(mode === "dark"
            ? {
                main: "#1f4720",
              }
            : {
                main: "#4caf50",
              }),
        },
        secondary: {
          ...(mode === "dark" && {
            main: "#9900cc",
          }),
          ...(mode === "light" && {
            main: "#0000e6",
          }),
        },
        background: {
          ...(mode === "dark"
            ? {
                default: "#102310",
                paper: "#275929",
              }
            : {
                paper: "#2f6a31",
              }),
        },
        text: {
          ...(mode === "dark"
            ? {
                primary: "#fff",
                secondary: "#e6ffe6",
                default: "#e6ffe6",
              }
            : {
                primary: "#fff",
                secondary: "#e6ffe6",
              }),
        },
      }),
    },
  });
}
