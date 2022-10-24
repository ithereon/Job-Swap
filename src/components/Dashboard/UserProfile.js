import React from "react";
import { Link } from "react-router-dom";

import { Avatar } from "@mui/material";
import LinkButton from "../LinkButton";

import colorTheme from "../../styles/color";

import {AiOutlineRight} from "react-icons/ai";
import {BiChevronRight} from "react-icons/bi";

import avatarSize from "../../utils/avatar";

import "../../styles/font.scss";
import "../../styles/components/userprofile.scss";

const UserProfile = ({title, number, text}) => {
  return (
    <div className="userprofile d-flex flex-column">
      <div className="profile-top">
        <img className="profile-background" alt="" src=""/>
        <Avatar
            alt="Remy Sharp"
            src="/assets/images/avatar/1.jpg"
            sx={{ width: avatarSize.xxl, height: avatarSize.xxl }}
            className="profile-avatar"
          />
      </div>
      <div className="profile-body">
        <label className="profile-name">John Doe</label>
        <label className="profile-job">HR Manager</label>
      </div>
    </div>
  );
};

export default UserProfile