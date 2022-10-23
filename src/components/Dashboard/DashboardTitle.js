import React from "react";
import { Link } from "react-router-dom";

import { Avatar } from "@mui/material";

import avatarSize from "../../utils/avatar";
import DashboardTitleItem from "./DashboardTitleItem";


import "../../styles/components/dashboardtitle.scss";

const DashboardTitle = () => {
  return (
    <div className="dashboard-title w-100">
        <div className="contain">
          <DashboardTitleItem title="Total Staff" number="425" text="Manage my staff"/>
        </div>
    </div>
  );
};

export default DashboardTitle