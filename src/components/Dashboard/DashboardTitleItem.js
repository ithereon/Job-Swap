import React from "react";
import { Link } from "react-router-dom";

import { Avatar } from "@mui/material";
import LinkButton from "../LinkButton";

import colorTheme from "../../styles/color";

import {AiOutlineRight} from "react-icons/ai";
import {BiChevronRight} from "react-icons/bi";

import avatarSize from "../../utils/avatar";

import "../../styles/font.scss";
import "../../styles/components/dashboardtitleitem.scss";

const DashboardTitleItem = ({title, number, text}) => {
  return (
    <div className="dashboard-title-item d-flex flex-column">
        <label className="dashboard-title-item-title n_400">{title}</label>
        <label className="dashboard-title-item-number x_l_700">{number}</label>
        <LinkButton
          wcolor={colorTheme.white.pure}
          wfontcolor={colorTheme.blue.w500}
          fontstyle="n_500"
          variant="contained"
          className="dashboard-title-item-link"
        >
          {text}
          <BiChevronRight />
        </LinkButton>
    </div>
  );
};

export default DashboardTitleItem