import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import fontTheme from "../styles/font";

const typePattern = {
  x_n_600: {
    lineHeight: "27px",
  },
  n_500: {
    lineHeight: "24px",
  },
  s_500: {
    lineHeight: "21px",
  },
};

const ActionLinkButton = styled(Button)(({wcolor, wfontcolor, fontstyle }) => ({
  padding: 0,
  color: wfontcolor,
  backgroundColor: wcolor,
  fontSize: fontTheme[fontstyle].size,
  fontWeight: fontTheme[fontstyle].weight,
  lineHeight: typePattern[fontstyle].lineHeight,
  gap: 6,
  border: "none",
  boxShadow: "none",
}));

export default React.memo(ActionLinkButton);
