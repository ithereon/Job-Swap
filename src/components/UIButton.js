import React from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import fontTheme from "../styles/font";

const typePattern = {
    big:{
        fontSize: 24,
        fontWeight: 600,
        lineHeight: '33.6px',
        padding: '20px 36px'
    },
    medium:{
        fontSize: 20,
        fontWeight: 600,
        lineHeight: '30px',
        padding: '18px 32px'
    },
    normal:{
        fontSize: 16,
        fontWeight: 600,
        lineHeight: '24px',
        padding: '10px 20px'
    },
    small:{
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '21px',
        padding: '8px 16px'
    }
}

const UIButton = styled(Button)(({wsize, wcolor, wfontcolor}) => ({
    color: wfontcolor,
    backgroundColor: wcolor,
    padding: typePattern[wsize].padding,
    fontSize: typePattern[wsize].fontSize,
    borderRadius: 100,
    fontWeight: typePattern[wsize].fontWeight,
    lineHeight: typePattern[wsize].lineHeight,
    gap: '6px'
  }));

export default React.memo(UIButton);
