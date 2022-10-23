import React from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import fontTheme from "../styles/font";

const CustomIconButton = styled(Button)(({wcolor, wfontcolor}) => ({
    color: wfontcolor,
    backgroundColor: wcolor,
    padding: 16,
    fontSize: 16,
    borderRadius: 8,
    fontWeight: 400,
    lineHeight: "24px",
    gap: 6,
    border: "1px solid",
    borderColor: wcolor
  }));

export default React.memo(CustomIconButton);
