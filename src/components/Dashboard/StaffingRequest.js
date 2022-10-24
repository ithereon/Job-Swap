import React from "react";
import { Link } from "react-router-dom";

import { Avatar } from "@mui/material";
import LinkButton from "../LinkButton";

import { AiOutlineRight } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";

import avatarSize from "../../utils/avatar";
import ImageListItem from "@mui/material/ImageListItem";
import ActionLinkButton from "../ActionLinkButton";
import FooterButton from "../FooterButton";

import colorTheme from "../../styles/color";
import "../../styles/font.scss";
import "../../styles/color.scss";
import "../../styles/components/dashboard/staffrequest.scss";

const StaffingRequest = ({ title, number, text }) => {
  return (
    <div className="staffing-request">
      <div className="staffing-title">
        <div className="staffing-company">
          <label className="company-mark">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_810_2425)">
                <path
                  d="M11.69 27.86C5.04 26.67 0 20.93 0 14C0 6.3 6.3 0 14 0C21.7 0 28 6.3 28 14C28 20.93 22.96 26.67 16.31 27.86L15.54 27.23H12.46L11.69 27.86Z"
                  fill="url(#paint0_linear_810_2425)"
                />
                <path
                  d="M19.4598 17.92L20.0898 14H16.3798V11.27C16.3798 10.15 16.7998 9.30996 18.4798 9.30996H20.2998V5.73996C19.3198 5.59996 18.1998 5.45996 17.2198 5.45996C13.9998 5.45996 11.7598 7.41996 11.7598 10.92V14H8.25977V17.92H11.7598V27.79C12.5298 27.93 13.2998 28 14.0698 28C14.8398 28 15.6098 27.93 16.3798 27.79V17.92H19.4598Z"
                  fill="white"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_810_2425"
                  x1="14.0007"
                  y1="27.0262"
                  x2="14.0007"
                  y2="-0.00515744"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#0062E0" />
                  <stop offset="1" stop-color="#19AFFF" />
                </linearGradient>
                <clipPath id="clip0_810_2425">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </label>
          <label className="company-title">Facebook</label>
          <label className="state">URGENT</label>
        </div>
        <ActionLinkButton
          wcolor={colorTheme.white.pure}
          wfontcolor={colorTheme.blue.w500}
          fontstyle="n_500"
          variant="contained"
        >
          <svg
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 0.25C6.32217 0.25 6.58333 0.511167 6.58333 0.833333V4.91667H10.6667C10.9888 4.91667 11.25 5.17783 11.25 5.5C11.25 5.82217 10.9888 6.08333 10.6667 6.08333H6.58333V10.1667C6.58333 10.4888 6.32217 10.75 6 10.75C5.67783 10.75 5.41667 10.4888 5.41667 10.1667V6.08333H1.33333C1.01117 6.08333 0.75 5.82217 0.75 5.5C0.75 5.17783 1.01117 4.91667 1.33333 4.91667H5.41667V0.833333C5.41667 0.511167 5.67783 0.25 6 0.25Z"
              fill="#1A5FB2"
            />
          </svg>
          Follow
        </ActionLinkButton>
      </div>
      <div className="staffing-body">
        <div className="request-content">
          <h4 className="request-content-title m_400">
            Senior Python Developer With Django Exprience.
          </h4>
          <label className="request-content-suggestion n_400">
            You don't have any employee with the required skills
          </label>
        </div>
        <div className="employ-detail">
          <div className="single-detail">
            <label className="detail-label n_500">Location</label>
            <label className="detail-value n_500">Rotterdam</label>
          </div>
          <div className="single-detail">
            <label className="detail-label n_500">Exp. Year</label>
            <label className="detail-value n_500">6 Years</label>
          </div>
          <div className="single-detail">
            <label className="detail-label n_500">Pay Rate</label>
            <label className="detail-value n_500">$68/hr</label>
          </div>
          <div className="single-detail">
            <label className="detail-label n_500">Hours/Week</label>
            <label className="detail-value n_500">40 Hour</label>
          </div>
        </div>
      </div>
      <div className="staffing-action d-flex justify-content-between w-100">
        <FooterButton
          wtype="nofull"
          wcolor={colorTheme.white.pure}
          wfontcolor={colorTheme.blue.w500}
          variant="contained"
        >
          Detail
        </FooterButton>
        <FooterButton
          wtype="full"
          wcolor={colorTheme.blue.w500}
          wfontcolor={colorTheme.white.pure}
          variant="contained"
        >
          Apply
        </FooterButton>
      </div>
    </div>
  );
};

export default StaffingRequest;
