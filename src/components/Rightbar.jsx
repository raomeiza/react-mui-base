import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AvatarGroup,
  ImageList,
  Card,
  List,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Avatar from "./Avatar";
import ImageListItems from "./ImageListItem";
import Discus from './Discus'

const avatarImg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const Rightbar = () => {
  return (
    <Box
      flex={2}
      bgcolor="whitesmoke"
      sx={{
        display: { xs: "none", md: "block" },
      }}
      padding={2}
    >
      <Box sx={{ position: "fixed" }} flex={2} p={2}>
        <Box className="activities">
          {" "}
          {/** activities starts */}
          <Typography variant="h6" fontWeight={100}>
            {" "}
            Activities
          </Typography>
          <Accordion sx={{ justifycontent: "center" }} dense={true}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-label="Expand"
              aria-controls="-content"
              id="-header"
            >
              <Typography variant="h6" fontWeight={100}>
                {" "}
                Active Friends
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ maxHeight:"12vh", overflowY:"auto"  }}>
              <AvatarGroup max={7} float="center" sx={{ overflowX: "auto" }}>
                {avatarImg.map((val) => Avatar(val))}
              </AvatarGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ justifycontent: "center" }} variant="small">
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-label="Expand"
              aria-controls="-content"
              id="-header"
            >
              <Typography variant="h6" fontWeight={100}>
                {" "}
                Recent Photos
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ maxHeight:"12vh", overflowY:"auto"  }}>
              <ImageList
                sx={{
                  overflowY: "auto",
                }}
              >
                {avatarImg.map((val) => ImageListItems(val))}
              </ImageList>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ justifycontent: "center" }} variant="small">
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-label="Expand"
              aria-controls="-content"
              id="-header"
            >
              <Typography variant="h6" fontWeight={100}>
                {" "}
                Tweets
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ maxHeight:"12vh", overflowY:"auto"  }}>
              <List>
                {avatarImg.map((val) => (Discus(val)))}
              </List>
            </AccordionDetails>
          </Accordion>
        </Box>{" "}
        {/**activities ends */}
        <Box className="recent-chats" flex={2} mt={1} component={Card}>
          <Typography variant="h6" color="text.primary" mb={1} fontWeight={100}>
            Recent Photos
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Rightbar;
