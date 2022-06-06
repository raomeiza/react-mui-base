import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  ButtonGroup,
  Button,
  Drawer,
  Divider,
  Typography,
} from "@mui/material";
import {
  Email,
  Group,
  Info,
  Notifications,
  Edit,
  Contacts,
  Home,
  ModeNightTwoTone,
} from "@mui/icons-material";
import AppLogo from "./AppLogo";

const Sidebar = ({
  window,
  mode,
  setMode,
  myColor,
  setMyColor,
  mobileOpen,
  handleDrawerToggle,
}) => {
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const drawer = (
    <Box
      component="nav"
      sx={{ width: { sm: 180, flexShrink: { sm: 0 } } }}
      aria-label="mailbox folders"
    >
      <List
        disablePadding
        sx={{ maxWidth: "100%", overflowY: "auto" }}
        dense={true}
      >
        <ListItem disablePadding key="0001">
          <ListItemButton component="a" href="#/">
            <ListItemIcon mr={0} display="flex" position="relative">
              <AppLogo />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        {[
          { text: "Home", icon: <Home /> },
          { text: "Group", icon: <Group /> },
          { text: "Info", icon: <Info /> },
          { text: "Contacts", icon: <Contacts /> },
          { text: "Emails", icon: <Email /> },
          { text: "Notifications", icon: <Notifications /> },
          { text: "Register", icon: <Edit /> },
        ].map((entry, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton component="a" href="#/">
              <ListItemIcon>{entry.icon}</ListItemIcon>
              <ListItemText>{entry.text}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
        <br />
        <Divider sx={{ ml: 2, mr: 2 }}>
          <Typography variant="subtitle1" color="text.primary" fontWeight="300">
            Theme
          </Typography>
        </Divider>
        <ListItem disablePadding sx={{ p: 2 }}>
          <ButtonGroup
            orientation="vertical"
            variant="contained"
            aria-label="theme"
            size="small"
            direction="row"
            value={myColor}
            ml={2}
          >
            <Button onClick={(e) => setMyColor("blue")} bgcolor="blue">
              Blue
            </Button>
            <Button onClick={(e) => setMyColor("purple")} bgcolor="purple">
              Purple
            </Button>
            <Button onClick={(e) => setMyColor("magenta")} bgcolor="magenta">
              Magenta
            </Button>
          </ButtonGroup>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ModeNightTwoTone />
            </ListItemIcon>
            <Switch
              onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <Box
      flex={1}
      p={2}
      bgcolor="background.default"
      color="text.secondary"
      sx={{
        display: { xs: "none", sm: "block" },
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          overflowY: "auto",
        }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="persistent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Sidebar;
