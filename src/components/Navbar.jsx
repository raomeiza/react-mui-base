import React, { useState } from "react";
import {
  AppBar,
  styled,
  InputBase,
  IconButton,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Box,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import {
  Menu as MenuIcon,
  Search,
  Pets,
  Mail as MailIcon,
  Notifications,
} from "@mui/icons-material";
import Image from "../img/2 (1).jpg";
import AppLogo from "./AppLogo";

const Navbar = ({email, handleDrawerToggle}) => {
  const Searchbox = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  const StyleToolbar = styled(Box)({
    display: "inline-flex",
    justifycontent: "space-between",
  });

  const Icons = styled(Box)({
    color: "white",
    display: "flex",
    gap: "1vw",
    hover: {
      backgroundColor: "white",
      color: "blue",
    },
  });
  const trigger = useScrollTrigger();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const PositionedMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = function () {
      setAnchorEl(null);
    };

    return (
      <Box>
        <IconButton aria-label="emails" onClick={handleClick}>
          <Badge badgeContent={email.length} color="error">
            <MailIcon sx={{ color: "text.primary" }} />
          </Badge>
        </IconButton>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          {email.map((entry, i) => (
            <MenuItem key={i}>{entry.from}</MenuItem>
          ))}
        </Menu>
      </Box>
    );
  };
  return (
    <Slide in={!trigger}>
      <AppBar
        position="sticky"
        sx={{
          padding: "10px",
          display: "flex",
          justifycontent: "space-between",
        }}
        display="flex"
      >
        <StyleToolbar display="flex" justifyContent="space-between">
          <Box display="flex"maxHeight={45} alignContent="center" alignItems="center">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
            <AppLogo show="none"/>
          </Box>
          <Searchbox sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <InputBase placeholder="Search" sx={{ width: "100%" }} />
          </Searchbox>
          <IconButton
            aria-label="Search"
            onClick={() => console.log("hello")}
            sx={{ display: { sm: "block", md: "none", lg: "none" } }}
          >
            <Icons>
              <Search sx={{ color: "white" }} />
            </Icons>
          </IconButton>
          <Icons className="badges">
            <PositionedMenu />
            <Menu
              id="main"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={(e) => {
                setAnchorEl(null);
              }}
            >
              {email.map((item, i) => (
                <MenuItem key={i}>{item.from}</MenuItem>
              ))}
            </Menu>
            <IconButton aria-label="\" onClick={handleClick}>
              <Badge badgeContent={email.length} color="error">
                <Notifications sx={{ color: "text.primary" }} />
              </Badge>
            </IconButton>
            <IconButton>
              <Avatar
                src={Image}
                sx={{ width: "30px", height: "30px" }}
              ></Avatar>
            </IconButton>
          </Icons>
        </StyleToolbar>
      </AppBar>
    </Slide>
  );
};
export default Navbar;
