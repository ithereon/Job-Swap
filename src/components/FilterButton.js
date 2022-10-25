import React from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import fontTheme from "../styles/font";
import colorTheme from "../styles/color";

// const typePattern = {
//     full:{
//         fontWeight: 600
//     },
//     nofull:{
//         fontWeight: 400
//     },
// }

const FilterButton = styled(Button)(({ wcolor, wfontcolor}) => ({
    color: wfontcolor,
    backgroundColor: wcolor,
    padding: "8px 20px",
    fontSize: 16,
    borderRadius: 100,
    fontWeight: 400,
    lineHeight: "15px",
    gap: '6px'
  }));

export default React.memo(FilterButton);
