import React from "react";
import { Link } from "react-router-dom";

import { Avatar } from "@mui/material";
import LinkButton from "../LinkButton";

import { AiOutlineRight } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { FiChevronRight } from "react-icons/fi";

import avatarSize from "../../utils/avatar";
import ImageListItem from "@mui/material/ImageListItem";
import ActionLinkButton from "../ActionLinkButton";
import FooterButton from "../FooterButton";

import colorTheme from "../../styles/color";
import "../../styles/font.scss";
import "../../styles/color.scss";
import "../../styles/components/dashboard/availablerequest.scss";

const availablePattern = {};

const AvailableEmployee = ({ highlighted }) => {
  return (
    <>
      <div className="available-employ">
        <div className="single-employee">
          <div className="employee-information">
            <Avatar
              alt="Remy Sharp"
              src="/assets/images/avatar/1.jpg"
              sx={{ width: avatarSize.xl, height: avatarSize.xl }}
            />
            <div className="employee-header">
              <h5 className="employee-name xx_n_600">
                Senior Python Developer With Django Exprience.
              </h5>
              <label className="employee-title n_400">
                You don't have any employee with the required skills
              </label>
            </div>
          </div>
          <div className="employee-body">
            <div className="employee-detail">
              <div className="single-detail">
                <label className="detail-label n_500">Location</label>
                <label className="detail-value n_500">Eindhoven</label>
              </div>
              <div className="single-detail">
                <label className="detail-label n_500">Pay Rate</label>
                <label className="detail-value n_500">$50/hr</label>
              </div>
              <div className="single-detail">
                <label className="detail-label n_500">Offered By</label>
                <label className="detail-value n_500">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_810_1643)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 0C3.1325 0 0 3.1325 0 7C0 10.0975 2.00375 12.7138 4.78625 13.6413C5.13625 13.7025 5.2675 13.4925 5.2675 13.3088C5.2675 13.1425 5.25875 12.5913 5.25875 12.005C3.5 12.3288 3.045 11.5763 2.905 11.1825C2.82625 10.9813 2.485 10.36 2.1875 10.1938C1.9425 10.0625 1.5925 9.73875 2.17875 9.73C2.73 9.72125 3.12375 10.2375 3.255 10.4475C3.885 11.5063 4.89125 11.2088 5.29375 11.025C5.355 10.57 5.53875 10.2638 5.74 10.0888C4.1825 9.91375 2.555 9.31 2.555 6.6325C2.555 5.87125 2.82625 5.24125 3.2725 4.75125C3.2025 4.57625 2.9575 3.85875 3.3425 2.89625C3.3425 2.89625 3.92875 2.7125 5.2675 3.61375C5.8275 3.45625 6.4225 3.3775 7.0175 3.3775C7.6125 3.3775 8.2075 3.45625 8.7675 3.61375C10.1063 2.70375 10.6925 2.89625 10.6925 2.89625C11.0775 3.85875 10.8325 4.57625 10.7625 4.75125C11.2087 5.24125 11.48 5.8625 11.48 6.6325C11.48 9.31875 9.84375 9.91375 8.28625 10.0888C8.54 10.3075 8.75875 10.7275 8.75875 11.3838C8.75875 12.32 8.75 13.0725 8.75 13.3088C8.75 13.4925 8.88125 13.7113 9.23125 13.6413C11.9963 12.7138 14 10.0888 14 7C14 3.1325 10.8675 0 7 0Z"
                        fill="#1B1F23"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_810_1643">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Linkdin
                </label>
              </div>
            </div>
            <LinkButton
              wcolor={colorTheme.white.pure}
              wfontcolor={colorTheme.blue.w500}
              fontstyle="n_500"
              variant="contained"
            >
              View Proflie
              <FiChevronRight />
            </LinkButton>
          </div>
        </div>
        {highlighted=="true" ? (
          <div className="employee-state">
            <label className="s_500">Hightlighted</label>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default AvailableEmployee;
