// src/components/Layout.js
import React from "react";
import Chat from "../pages/Chat"; // Adjust the path based on your structure
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d4a373", // Soft gold/beige accent
    },
    background: {
      default: "#f8f5f2", // Light cream background
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="app-container">
        {/* Wavy Background */}
        <div className="wave"></div>

        {/* Chat Box */}
        <Chat />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
