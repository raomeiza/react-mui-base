import { createTheme, } from "@mui/material";

export default function myTheme({mode, myColor}) {
 return createTheme({
    palette: {
      ...(myColor === "blue" && {
        primary: {
          ...(mode === "dark" && {
            main: "#1e1e7b",
          }),
          ...(mode === "light" && {
            main: "#3333cc",
          }),
        },
        secondary: {
          ...(mode === "dark" && {
            main: "#9900cc",
          }),
          ...(mode === "light" && {
            main: "#0073e6",
          }),
        },
        background:{
          ...(mode === "dark"
            ? {
                default: "#0f0f3d",
                paper: "#3333cc",

              }
            : {
                paper: "#3333ff",
                // paper: ""
              }
          )
        },
        text:{
          ...(mode === "dark"
            ? {
                primary: "#fff",
                secondary: "#ccccff"
              }
            : {
                primary: "#fff",
                secondary: "#0f0f3d"
              }
          )
        }
      }),
      ...(myColor === "purple" && {
        primary: {
          ...(mode === "dark" && {
            main: "#600080",
          }),
          ...(mode === "light" && {
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
        background:{
          ...(mode === "dark" 
            ? {
                default: "#13001a",
                paper: "#39004d",
              }
            : {
                paper: "#df80ff"
              } 
          )
        },
        text:{
          ...(mode === "dark"
            ? {
                primary: "#fff",
                secondary: "#adadeb",
                default: "#adadeb",
              }
            : {
                primary: "#fff",
                secondary: "#600080"
              }
          )
        }
        
      }),
      ...(myColor === "magenta" && {
        primary: {
          ...(mode === "dark" && {
            main: "#1f4720",
          }),
          ...(mode === "light" && {
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
        background:{
          ...(mode === "dark" 
            ? {
                default: "#102310",
                paper: "#275929",
              }
            : {
                paper: "#2f6a31"
              } 
          )
        },
        text:{
          ...(mode === "dark"
            ? {
                primary: "#fff",
                secondary: "#adadeb",
                default: "#adadeb",
              }
            : {
                primary: "#fff",
                secondary: "#600080"
              }
          )
        }
      }
      
      ),
      // secondary: {
      //   dark: "#000066",
      //   light: "#6666ff",
      //   main: "#0000e6",
      // },
      // pink: {
      //   dark: "#660066",
      //   light: "#ffb3ff",
      //   main: "#e600e6",
      // },
    },
  });
}
