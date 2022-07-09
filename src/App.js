import React, { useState } from "react";
import {
  ThemeProvider,
  CssBaseline,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Sidebar from "./components/sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import { Stack, Box } from "@mui/material";
import AddTweet from "./components/AddTweeet";
import myTheme from "./components/myTheme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Contacts,
  Edit,
  Email,
  Group,
  Home,
  Info,
  Notifications,
} from "@mui/icons-material";
import { colorData } from "./components/color.data";

function LocalApp({ images, navLinks, email }) {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));
  const isTablet = useMediaQuery(useTheme().breakpoints.between("sm", "md"));
  const clientDevice = {
    screen: { isMobile: isMobile, isTablet: isTablet },
    colorMode: useMediaQuery("(prefers-color-scheme: dark)") ? "dark" : "light", // check the users prefer color mode
  };
  const [mode, setMode] = useState(clientDevice.colorMode);
  const [myColor, setMyColor] = useState("blue");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const scrollBar = document.getElementById("scrollbar-style")
  //  get the dom node for seting the app color
  let appColor = document.getElementById('app-color')
  React.useEffect(() => {
    // the color to use for global scroll bar and app theme
    // the app theme makes the app look like native app as mobile
    // browsers fill the rest of the screan outside the browser
    // with it
    let color = colorData[myColor][mode].primary.main;
    // set the app color
    appColor.setAttribute('content', color)
    // set the Scrollbar color
    scrollBar.replaceChildren(`
      ::-webkit-scrollbar-thumb {
        background: ${String(color)};
        border-radius: 1vw;
      }
      `);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, myColor])
  
  let divided = Math.floor(images.length / navLinks.length);
  return (
    <ThemeProvider theme={myTheme({ mode, myColor })}>
      <CssBaseline enableColorScheme />
      <Box bgcolor="background.default">
        <Navbar
          setMobielOpen={setMobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          email={email}
        />
        <Stack
          direction="row"
          sx={{ spacing: { xs: 0, sm: 0, md: 1, lg: 1.5 } }}
          justifyContent="space-between"
          mt={1}
        >
          <Router>
            <Sidebar
              flex={clientDevice.screen.isTablet ? 0.3 : 4}
              mode={mode}
              myColor={myColor}
              mobileOpen={mobileOpen}
              setMobileOpen={setMobileOpen}
              handleDrawerToggle={handleDrawerToggle}
              clientScreen={clientDevice.screen}
              navLinks={navLinks}
              setMode={setMode}
              setMyColor={setMyColor}
              key="sideBar"
            />
            <Box
              flex={clientDevice.screen.isTablet ? 7 : 4}
              sx={{
                margin: { xs: 1, sm: 1 },
              }}
              component="main"
              id="main-content"
            >
              <Routes>
                {navLinks.map((entry, index) => (
                  <Route
                    path={entry.link}
                    element={
                      <Feed
                        key={index}
                        imgLink={images.slice(
                          index * divided,
                          index * divided + divided
                        )}
                        clientScreen={clientDevice.screen}
                      />
                    }
                  />
                ))}
                <Route
                  element={
                    <Box
                      flex={4}
                      sx={{
                        margin: {
                          xs: 1,
                          sm: 1,
                          fontWeight: 500,
                          fontSize: "10em",
                        },
                      }}
                    >
                      404 not found
                    </Box>
                    // <Feed
                    //   key={'index'}
                    //   imgLink={images.slice(
                    //     divided,
                    //     divided + divided
                    //   )}
                    // />
                  }
                />
              </Routes>
            </Box>
          </Router>
          <Rightbar key="right-bar" />
        </Stack>
        <AddTweet />
      </Box>
    </ThemeProvider>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      navLinks: [
        { text: "Home", icon: <Home />, link: "/" },
        { text: "Group", icon: <Group />, link: "/Group" },
        { text: "Info", icon: <Info />, link: "/Info" },
        { text: "Contacts", icon: <Contacts />, link: "/Contacts" },
        { text: "Emails", icon: <Email />, link: "/Emails" },
        {
          text: "Notifications",
          icon: <Notifications />,
          link: "/Notifications",
        },
        { text: "Register", icon: <Edit />, link: "/Register" },
      ],
      email: [
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
      ],
    };
    for (let i = 0; i < 93; i++) {
      this.state.images.push(i);
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((state) => {
        // console.log('ppp');
        return { email: state.email };
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(this.interval);
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <LocalApp
        images={this.state.images}
        navLinks={this.state.navLinks}
        email={this.state.email}
      />
    );
  }
}
export default App;
