import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import UIButton from "./components/UIButton";
import OutlineButton from "./components/OutlineButton";
import LongButton from "./components/LongButton";
import FooterButton from "./components/FooterButton";
import CustomIconButton from "./components/CustomIconButton";
import ActionLinkButton from "./components/ActionLinkButton";
import LinkButton from "./components/LinkButton";
import MenuLink from "./components/MenuLink";
import RemoveConfirmation from "./components/RemoveConfirmation";
import Overlay from "./components/Overlay";
import ImageAvatars from "./components/ImageAvatars";
import Customcheckbox from "./components/Customcheckbox";
// import Customcalendar from "./components/CustomCalendar";

import Dashboard from "./pages/Dashboard";
import Components from "./pages/Components";

import colorTheme from "./styles/color";
import fontTheme from "./styles/font";
import { color } from "@mui/system";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import avatarSize from "./utils/avatar";

import Input from "@mui/material/Input";
import Box from "@mui/material/Box";

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Inter",
          textTransform: "initial",
        },
      },
    },
  },
});

const ariaLabel = { "aria-label": "description" };

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Components />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
