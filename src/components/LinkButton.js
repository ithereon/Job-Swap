import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import fontTheme from "../styles/font";
import { Opacity } from "@mui/icons-material";

const typePattern = {
  n_500: {
    lineHeight: "24px",
  },
  s_400: {
    lineHeight: "21px",
  },
};

const LinkButton = styled(Button)(({wcolor, wfontcolor, fontstyle }) => ({
  color: wfontcolor,
  backgroundColor: wcolor,
  // padding: 16,
  fontSize: fontTheme[fontstyle].size,
  fontWeight: fontTheme[fontstyle].weight,
  lineHeight: typePattern[fontstyle].lineHeight,
  gap: 6,
  border: "none",
  boxShadow: "none",
  // borderColor: wcolor,
}));

export default React.memo(LinkButton);
