import React from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import fontTheme from "../styles/font";

const typePattern = {
    full:{
        border: "none"
    },
    nofull:{
        border: "1px solid #1A5FB2"
    },
}

const FooterButton = styled(Button)(({wtype, wcolor, wfontcolor, fontstyle}) => ({
    color: wfontcolor,
    backgroundColor: wcolor,
    padding: "8px 16px",
    fontSize: 16,
    borderRadius: 100,
    fontWeight: 500,
    lineHeight: "15px",
    border: typePattern[wtype].border,
    gap: '6px'
  }));

export default React.memo(FooterButton);
