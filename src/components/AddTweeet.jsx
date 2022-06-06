import React, { useState } from "react";
import { Tooltip, Fab, Modal, Box, styled, Typography, Avatar, TextField, Paper } from "@mui/material";
import { Add } from "@mui/icons-material";
export default function AddTweet() {
  const MyModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Add tweet"
        sx={{
          position: "fixed",
          bottom: "1vh",
          left: { xs: "calc(50% - 25px)", md: 20 },
        }}
        onClick={(e) => setOpen(true)}
      >
        <Fab color="primary" aria-label="">
          <Add />
        </Fab>
      </Tooltip>
      <MyModal open={open} onClose={(e) => setOpen(false)}>
        <Box
          bgcolor="background.default"
          color="text.primary" 
          p={2}
          borderRadius={3}
          sx={{
            width: { xs: "86vw", md: "400px" },
            height: { xs: "60vh", md: "280px" },
            overflowY: "auto",
          }}
        >
          <Typography variant="h6" color="grey" textAlign="center">
            Create Tweet
          </Typography>
          <UserBox>
            <Avatar
              src="http://127.0.0.1:5500/src/img/1%20(1).jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant="span" fontWeight={200}>
              John Doe
            </Typography>
          </UserBox>
          <TextField
            id="message"
            label="Tweet Text"
            placeholder="What's on your mind"
            onChange={null}
            multiline
            rows={4}
            variant="filled"
            sx={{ width: "100%", color:"text.primary"}}
            component={Paper}
          />
        </Box>
      </MyModal>
    </>
  );
}
