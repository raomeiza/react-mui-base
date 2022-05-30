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
} from "@mui/material";
// import { theme } from '@emotion/styled'
import Typography from "@mui/material/Typography";
import {
  Pets,
  Mail as MailIcon,
  Notifications,
} from "@mui/icons-material";
import Image from "../img/q (2).png";

const Navbar = () => {
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

  var notifications = [
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
    // hover: {
    //   backgroundColor: "white",
    //   color: 'blue',
    // }
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = e => setAnchorEl(e.currentTarget)
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
        <IconButton aria-label="emails" onClick={handleClick}
            >
            <Badge badgeContent={email.length} color="error">
              <MailIcon sx={{ color: "white" }} />
            </Badge>
        </IconButton>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          { email.map((entry, i) => (
            <MenuItem key={ i }>{entry.from}</MenuItem>
          )) }
        </Menu>
      </Box>
    );
        }
  return (
    <AppBar position="sticky" sx={{ padding: "10px" }}>
      <StyleToolbar>
        <Typography
          variant="h6"
          sx={{ display: { sm: "none", xs: "none", md: "block" } }}
        >
          Omieza
        </Typography>
        <Pets sx={{ display: { sm: "block", xs: "block", md: "none" } }} />
        <Searchbox /*sx={{ display: { xs: "none", sm: "none", md: "block" } }} */
        >
          <InputBase placeholder="Search" sx={{ width: "100%" }} />
        </Searchbox>
        {/* <IconButton
            aria-label="Search"
            onClick={console.log("hello")}
            sx={{ display: { sm: "block", md: "none", lg: "none" } }}
          >
            <Icons>
              <Search sx={{ color: "white" }}/>
            </Icons>
          </IconButton> */}
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
            open= {Boolean(anchorEl)}
            onClose={ e => {
              setAnchorEl(null)
            } }
          >
            {email.map((item, i) => (
              <MenuItem key={i}>{item.from}</MenuItem>
            ))}
          </Menu>
          <IconButton
            aria-label="\"
            onClick={handleClick}
          >
            <Badge badgeContent={notifications.length} color="error">
              <Notifications sx={{ color: "white" }} />
            </Badge>
          </IconButton>
          <IconButton>
            <Avatar src={Image} sx={{ width: "30px", height: "30px" }}></Avatar>
          </IconButton>
        </Icons>
      </StyleToolbar>
    </AppBar>
  );
};
export default Navbar;
