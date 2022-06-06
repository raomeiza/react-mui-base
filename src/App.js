import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Sidebar from "./components/sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import { Stack, Box } from "@mui/material";
import AddTweet from "./components/AddTweeet";
import ThemeSwitcher from "./components/ThemeSwitcher";
import myTheme from "./components/myTheme";
import ResponsiveDrawer from "./components/ResponsiveDrawer";

function App() {
  const [mode, setMode] = useState("light");
  const [myColor, setMyColor] = useState('default')
  const drawerWidth = 240;
  var email = [
    { from: "joe@me.com", time: Date.now(), message: "hello" },
    {
      from: "jemila@yahoo.com",
      time: Date.now() - 9237487,
      message: "how's your date",
    },
    {
      from: "haruna@yahoo.com",
      time: Date.now() - 23847244,
      message: "how about we go out tonight",
    },
  ];

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={myTheme({mode, myColor})}>
      <CssBaseline enableColorScheme />
      <Box bgcolor="background.default">
        <Navbar
        setMode={setMode}
        mode={mode}
        myColor={myColor}
        setMyColor={setMyColor}
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        setMobielOpen={setMobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        email={email}
        />
        <Stack
          direction="row"
          spacing={1}
          justifyContent="space-between"
          mt={1}
        >
          <Sidebar
            mode={mode}
            setMode={setMode}
            myColor={myColor}
            setMyColor={setMyColor}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
            handleDrawerToggle={handleDrawerToggle}
            key="sideBar"
          />
          <Feed component="main" key="main"/>
          <Rightbar key="right-bar"/>
        </Stack>
        <AddTweet />
        <ThemeSwitcher />
      </Box>
    </ThemeProvider>
  );
}

export default App;
