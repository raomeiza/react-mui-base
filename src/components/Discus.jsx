import * as React from 'react';
import { ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography, } from '@mui/material';

export default function Discus(imgLink, index) {
  return (
    <>
      <ListItem alignItems="flex-start" key={index } color="primary">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={require(`../img/1 (${imgLink}).jpg`)} />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
