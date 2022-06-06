import React from 'react'
import { Box, SpeedDial, SpeedDialAction } from '@mui/material'
import { Share, Facebook, WhatsApp, Twitter } from '@mui/icons-material'

const actions = [
    { icon: <Facebook />, name: "Facebook" },
    { icon: <Twitter />, name: "Twitter" },
    { icon: <WhatsApp />, name: "WhatsApp" },
]
export default function ShareBtn() {
    return (
      <Box sx={{ height: 30, width:30,  flexGrow: 2,  }} >
        <SpeedDial
          variant="text"
          ariaLabel="share"
          sx={{ position: 'relative', top: 0, right: 0, width: 30, height:30, padding:0, margin:0 }}
          icon={<Share />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box>
    );
  }