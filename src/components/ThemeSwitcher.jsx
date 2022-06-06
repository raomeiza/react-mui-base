import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import { amber, deepOrange, grey, blue } from '@mui/material/colors';
// import { PaletteMode } from '@mui/material';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...blue,
      ...(mode === 'dark' && {
        main: amber[300],
      }),
      ...(mode === 'light' && {
        main: deepOrange[900],
      }),
    },
    background:{
      ...(mode === 'dark' && {
        default: deepOrange[900],
        paper: deepOrange[900],
      }),
      ...(mode === 'light' && {
        default: blue[900],
        paper: blue[900],
        
      }),
    },
    // ...(mode === 'dark' && {
      // background: {
      // },
    // }),
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: '#fff',
            secondary: grey[500],
          }),
    },
  },
});

function MyApp() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      This is a {theme.palette.mode} mode theme with custom palette
    </Box>
  );
}

const darkModeTheme = createTheme(getDesignTokens('light'));

export default function ThemeSwitcher() {
  return (
    <ThemeProvider theme={darkModeTheme}>
      <MyApp />
    </ThemeProvider>
  );
}
