import * as React from "react";
import { NavLink, Link } from "react-router-dom";

import Header from "../components/header";
import DashboardTitle from "../components/Dashboard/DashboardTitle";
import UserProfile from "../components/Dashboard/UserProfile";
import LongButton from "../components/LongButton";
import CustomIconButton from "../components/CustomIconButton";
import FilterButton from "../components/FilterButton";

import StaffingRequest from "../components/Dashboard/StaffingRequest";
import AvailableEmployee from "../components/Dashboard/AvailableEmployee";

import colorTheme from "../styles/color";
import "../styles/components/dashboard/index.scss";
import fontTheme from "../styles/font";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <DashboardTitle />
      <div className="dashboard-content contain">
        <div className="dashboard-left">
          <UserProfile />
          <LongButton
            wcolor={colorTheme.blue.w500}
            wfontcolor={colorTheme.white.pure}
            variant="contained"
            className="post-request"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 0C6.36819 0 6.66667 0.298477 6.66667 0.666667V5.33333H11.3333C11.7015 5.33333 12 5.63181 12 6C12 6.36819 11.7015 6.66667 11.3333 6.66667H6.66667V11.3333C6.66667 11.7015 6.36819 12 6 12C5.63181 12 5.33333 11.7015 5.33333 11.3333V6.66667H0.666667C0.298477 6.66667 0 6.36819 0 6C0 5.63181 0.298477 5.33333 0.666667 5.33333H5.33333V0.666667C5.33333 0.298477 5.63181 0 6 0Z"
                fill="white"
              />
            </svg>
            Post A Staffing Request
          </LongButton>
        </div>
        <div className="dashboard-right">
          <div className="feed-control">
            <div className="feedfilter">
                <FilterButton wcolor="#8094AB" wfontcolor={colorTheme.black}>Show All</FilterButton>
                <FilterButton wcolor="#8094AB" wfontcolor={colorTheme.black}>Available Staff</FilterButton>
                <FilterButton wcolor="#8094AB" wfontcolor={colorTheme.black}>Staffing Requests</FilterButton>
                <FilterButton wcolor="#8094AB" wfontcolor={colorTheme.black}>From Network</FilterButton>
            </div>
            <CustomIconButton
              wcolor={colorTheme.white.w200}
              wfontcolor={colorTheme.black}
              variant="contained"
            >
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 12V10.75H10.5V12H5.5ZM3 5.75H13V7H3V5.75ZM15.5 0.75V2H0.5V0.75H15.5Z"
                  fill="black"
                />
              </svg>
              Advanced Filter
            </CustomIconButton>
          </div>
          <div className="feedwrapper">
            <StaffingRequest />
            <AvailableEmployee highlighted="true"/>
            <AvailableEmployee highlighted="false" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
