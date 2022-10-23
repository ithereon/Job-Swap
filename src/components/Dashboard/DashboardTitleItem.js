import React from "react";
import { Link } from "react-router-dom";

import { Avatar } from "@mui/material";
import LinkButton from "../LinkButton";

import colorTheme from "../../styles/color";

import avatarSize from "../../utils/avatar";


import "../../styles/components/dashboardtitleitem.scss";

const DashboardTitleItem = ({title, number, text}) => {
  return (
    <div className="dashboard-title-item d-flex flex-direction-column">
        <label>{title}</label>
        <label>{number}</label>
        <LinkButton
          wcolor={colorTheme.white.pure}
          wfontcolor={colorTheme.blue.w500}
          fontstyle="n_500"
          variant="contained"
        >
          {text}
          <svg
            width="6"
            height="11"
            viewBox="0 0 6 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.199951 9.11252L3.69995 5.61252L0.199951 2.11252L0.899951 0.712524L5.79995 5.61252L0.899951 10.5125L0.199951 9.11252Z"
              fill="#1A5FB2"
            />
          </svg>
        </LinkButton>
    </div>
  );
};

export default DashboardTitleItem