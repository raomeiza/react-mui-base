import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  Home as HomeIcon,
  Email,
  Group,
  Info,
  Notifications,
  Folder,
  Contacts,
  ModeNight,
} from "@mui/icons-material";
import React from "react";
// import { Positioned, email, } from './Navbar'

const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
        bgcolor:"whitesmoke"
      }}
    >
      <Box
        sx={{
          position: "fixed",
        }}
      >
        <List disablePadding sx={{ maxWidth:"100%" }} dense={true}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Group"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText primary="Info"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <Contacts />
              </ListItemIcon>
              <ListItemText primary="Contacts"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <Email />
              </ListItemIcon>
              <ListItemText primary="Emails"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <Notifications />
              </ListItemIcon>
              <ListItemText primary="Notifications"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <Folder />
              </ListItemIcon>
              <ListItemText primary="Register"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
              // value="off"
              // checked={ false }
              // onChange={ ()=> null }
              // inputProps={{ "aria-label": 'controled' }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
