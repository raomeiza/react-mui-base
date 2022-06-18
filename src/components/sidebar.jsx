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
  Chip,
  Checkbox,
} from "@mui/material";
import { BrowserRouter as Router, Link  } from 'react-router-dom'
import AppLogo from "./AppLogo";
import { ModeNight, ModeNightRounded } from "@mui/icons-material";

const Sidebar = ({
  window,
  mode,
  setMode,
  myColor,
  setMyColor,
  mobileOpen,
  handleDrawerToggle,
  clientScreen,
  navLinks
}) => {
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const { isMobile, isTablet, } = clientScreen
  const drawer = (
    <Box
      component="nav"
      aria-label="mailbox folders"
      sx={{
        width: clientScreen.isTablet ? 60 :'100%'
      }}
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
        {navLinks.map((entry, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton component={Link} to={entry.link} onClick={()=>clientScreen.isMobile ? handleDrawerToggle() : null}>
              <ListItemIcon>{entry.icon}</ListItemIcon>
              <ListItemText sx={{display: isTablet ? "none" : "block" }}>{entry.text}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
        <br />
        <Divider sx={{ ml: 2, mr: 2 }}>
          <Chip fontWeight="300" label="Theme" />
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
              B{clientScreen.isTablet ? '' : 'lue' }
            </Button>
            <Button onClick={(e) => setMyColor("purple")} bgcolor="purple">
              P{clientScreen.isTablet ? '' : 'urple' }
            </Button>
            <Button onClick={(e) => setMyColor("magenta")} bgcolor="magenta">
              M{clientScreen.isTablet ? '' : 'agenta' }
            </Button>
          </ButtonGroup>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            <ListItemIcon>
              <Checkbox 
                icon={<ModeNightRounded />}
                checkedIcon={<ModeNightRounded color="red"/>}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <Box
      flex={clientScreen.isTablet ? 0.4 : 1}
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
          variant= {isMobile ? "temporary" : "persistent"}
          open={isMobile ? mobileOpen : true}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: isMobile ? (mobileOpen ? "block" : "none") : "block", sm: isMobile ? "block" : (mobileOpen ? "none" : "block") },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
            },
          }}
        >
          {drawer}
        </Drawer>
        {/* <Drawer
kl          variant="persistent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
            },
          }}
          open
        >
          {drawer}
        </Drawer> */}
      </Box>
    </Box>
  );
};

export default Sidebar;
