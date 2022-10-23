import React from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import fontTheme from "../styles/font";

const LongButton = styled(Button)(({wcolor, wfontcolor}) => ({
    color: wfontcolor,
    backgroundColor: wcolor,
    padding: "16px 36px",
    fontSize: 16,
    borderRadius: 100,
    fontWeight: 500,
    lineHeight: "15px",
    gap: '10px'
  }));

export default React.memo(LongButton);