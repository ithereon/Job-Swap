import React from "react";
import { Link } from "react-router-dom";

import { Avatar } from "@mui/material";

import avatarSize from "../../utils/avatar";
import DashboardTitleItem from "./DashboardTitleItem";

import "../../styles/base.scss";
import "../../styles/components/dashboardtitle.scss";

const DashboardTitle = () => {
  return (
    <div className="dashboard-title w-100">
        <div className="contain d-flex justify-content-between">
          <DashboardTitleItem title="Total Staff" number="425" text="Manage my staff"/>
          <DashboardTitleItem title="Loaned Out" number="72" text="See loaned out staff"/>
          <DashboardTitleItem title="Hired" number="38" text="See hired staff"/>
          <DashboardTitleItem title="Approve hours before" number="Sep 12" text="Financial center"/>
          <DashboardTitleItem title="Balance" number="$1200" text="Legal center"/>
          <DashboardTitleItem title="Next contract explry" number="Nov 01" text="Manage my staff"/>
        </div>
    </div>
  );
};

export default DashboardTitle