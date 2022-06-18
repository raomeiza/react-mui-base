import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AvatarGroup,
  ImageList,
  List,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Avatar from "./Avatar";
import ImageListItems from "./ImageListItem";
import Discus from "./Discus";

const avatarImg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
class Rightbar extends React.Component {
  render() {
    return (
      <Box
        flex={2}
        bgcolor="background.default"
        sx={{
          display: { xs: "none", md: "block" },
        }}
        padding={1}
        key="rightbar"
      >
        <Box
          sx={{ position: "fixed" }}
          flex={2}
          p={1}
          mr={1}
          bgcolor="background.default"
          key="aa"
        >
          <Box className="activities" key="activities">
            {/** activities starts */}
            <Typography variant="h6" fontWeight={100}>
              Activities
            </Typography>
            <Accordion sx={{ justifycontent: "center" }} key="a1">
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
              <AccordionDetails
                sx={{ maxHeight: "12vh", overflowY: "auto" }}
                bgcolor="background.secondary"
              >
                <AvatarGroup max={7} float="center" sx={{ overflowX: "auto" }}>
                  {avatarImg.map((val, index) => Avatar(val, index))}
                </AvatarGroup>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ justifycontent: "center" }} key="a2">
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
              <AccordionDetails
                sx={{ maxHeight: "12vh", overflowY: "auto" }}
                bgcolor="background.secondary"
              >
                <ImageList
                  sx={{
                    overflowY: "auto",
                  }}
                >
                  {avatarImg.map((val, index) => ImageListItems(val, index))}
                </ImageList>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ justifycontent: "center" }} key="a3">
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
              <AccordionDetails
                sx={{ maxHeight: "12vh", overflowY: "auto" }}
                bgcolor="background.secondary"
              >
                <List>{avatarImg.map((val, index) => Discus(val, index))}</List>
              </AccordionDetails>
            </Accordion>
          </Box>
          {/**activities ends */}
        </Box>
      </Box>
    );
  }
}

export default Rightbar;
