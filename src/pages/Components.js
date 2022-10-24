import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import UIButton from "../components/UIButton";
import OutlineButton from "../components/OutlineButton";
import LongButton from "../components/LongButton";
import FooterButton from "../components/FooterButton";
import CustomIconButton from "../components/CustomIconButton";
import ActionLinkButton from "../components/ActionLinkButton";
import LinkButton from "../components/LinkButton";
import MenuLink from "../components/MenuLink";
import RemoveConfirmation from "../components/RemoveConfirmation";
import Overlay from "../components/Overlay";
import ImageAvatars from "../components/ImageAvatars";
import CustomInput from "../components/form/CustomInput";
import Customcheckbox from "../components/Customcheckbox";
// import Customcalendar from "./components/CustomCalendar";
import {AiOutlineRight} from "react-icons/ai";
import {BiChevronRight} from "react-icons/bi";
import {FiChevronRight} from "react-icons/fi"

import { BsChevronRight } from "react-icons/bs";

import Dashboard from "../pages/Dashboard";

import colorTheme from "../styles/color";
import fontTheme from "../styles/font";
import { color } from "@mui/system";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import avatarSize from "../utils/avatar";

import Input from "@mui/material/Input";
import Box from "@mui/material/Box";

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Inter",
          textTransform: "initial",
        },
      },
    },
  },
});

const ariaLabel = { "aria-label": "description" };

function App() {
  return (
    <>
      <div>
        <div>
          <UIButton
            wsize="big"
            wcolor={colorTheme.blue.w500}
            wfontcolor={colorTheme.white.pure}
            variant="contained"
          >
            Button
          </UIButton>
          <UIButton
            wsize="medium"
            wcolor={colorTheme.blue.w500}
            wfontcolor={colorTheme.white.pure}
            variant="contained"
          >
            Button
          </UIButton>
          <UIButton
            wsize="normal"
            wcolor={colorTheme.blue.w500}
            wfontcolor={colorTheme.white.pure}
            variant="contained"
          >
            Button
          </UIButton>
          <UIButton
            wsize="small"
            wcolor={colorTheme.blue.w500}
            wfontcolor={colorTheme.white.pure}
            variant="contained"
          >
            Button
          </UIButton>
        </div>
        <div>
          <UIButton
            wsize="big"
            wcolor={colorTheme.blue.w900}
            wfontcolor={colorTheme.white.pure}
            variant="contained"
          >
            Button
          </UIButton>
          <UIButton
            wsize="medium"
            wcolor={colorTheme.blue.w900}
            wfontcolor={colorTheme.white.pure}
            variant="contained"
          >
            Button
          </UIButton>
          <UIButton
            wsize="normal"
            wcolor={colorTheme.blue.w900}
            wfontcolor={colorTheme.white.pure}
            variant="contained"
          >
            Button
          </UIButton>
          <UIButton
            wsize="small"
            wcolor={colorTheme.blue.w900}
            wfontcolor={colorTheme.white.pure}
            variant="contained"
          >
            Button
          </UIButton>
        </div>
        <div>
          <UIButton
            wsize="big"
            wcolor={colorTheme.grayBlue.w300}
            wfontcolor={colorTheme.white.pure}
            variant="contained"
          >
            Button
          </UIButton>
          <UIButton
            wsize="medium"
            wcolor={colorTheme.grayBlue.w300}
            wfontcolor={colorTheme.white.pure}
            variant="contained"
          >
            Button
          </UIButton>
          <UIButton
            wsize="normal"
            wcolor={colorTheme.grayBlue.w300}
            wfontcolor={colorTheme.white.pure}
            variant="contained"
          >
            Button
          </UIButton>
          <UIButton
            wsize="small"
            wcolor={colorTheme.grayBlue.w300}
            wfontcolor={colorTheme.white.pure}
            variant="contained"
          >
            Button
          </UIButton>
        </div>
        <div>
          <UIButton
            wsize="big"
            wcolor={colorTheme.red.w500}
            wfontcolor={colorTheme.white.pure}
            variant="contained"
          >
            Button
          </UIButton>
          <UIButton
            wsize="medium"
            wcolor={colorTheme.red.w500}
            wfontcolor={colorTheme.white.pure}
            variant="contained"
          >
            Button
          </UIButton>
          <UIButton
            wsize="normal"
            wcolor={colorTheme.red.w500}
            wfontcolor={colorTheme.white.pure}
            variant="contained"
          >
            Button
          </UIButton>
          <UIButton
            wsize="small"
            wcolor={colorTheme.red.w500}
            wfontcolor={colorTheme.white.pure}
            variant="contained"
          >
            Button
          </UIButton>
        </div>
      </div>
      <div>
        <div>
          <OutlineButton
            wsize="big"
            wcolor={colorTheme.blue.w500}
            wfontcolor={colorTheme.blue.w500}
            variant="contained"
          >
            Button
          </OutlineButton>
          <OutlineButton
            wsize="medium"
            wcolor={colorTheme.blue.w500}
            wfontcolor={colorTheme.blue.w500}
            variant="contained"
          >
            Button
          </OutlineButton>
          <OutlineButton
            wsize="normal"
            wcolor={colorTheme.blue.w500}
            wfontcolor={colorTheme.blue.w500}
            variant="contained"
          >
            Button
          </OutlineButton>
          <OutlineButton
            wsize="small"
            wcolor={colorTheme.blue.w500}
            wfontcolor={colorTheme.blue.w500}
            variant="contained"
          >
            Button
          </OutlineButton>
        </div>
      </div>
      <div>
        <div>
          <LongButton
            wcolor={colorTheme.blue.w500}
            wfontcolor={colorTheme.white.pure}
            variant="contained"
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
          <LongButton
            wcolor={colorTheme.blue.w900}
            wfontcolor={colorTheme.white.pure}
            variant="contained"
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
      </div>
      <div>
        <LongButton
          wtype="full"
          wcolor={colorTheme.blue.w300}
          wfontcolor={colorTheme.blue.w500}
          variant="contained"
        >
          Show All
        </LongButton>
        <LongButton
          wtype="nofull"
          wcolor={colorTheme.white.pure}
          wfontcolor={colorTheme.black}
          variant="contained"
        >
          Show All
        </LongButton>
      </div>
      <div>
        <FooterButton
          wtype="full"
          wcolor={colorTheme.blue.w500}
          wfontcolor={colorTheme.white.pure}
          variant="contained"
        >
          Button
        </FooterButton>
        <FooterButton
          wtype="nofull"
          wcolor={colorTheme.white.pure}
          wfontcolor={colorTheme.blue.w500}
          variant="contained"
        >
          Button
        </FooterButton>
      </div>
      <div>
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
          Button
        </CustomIconButton>
      </div>
      <div>
        <ActionLinkButton
          wcolor={colorTheme.white.pure}
          wfontcolor={colorTheme.blue.w500}
          fontstyle="x_n_600"
          variant="contained"
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
              fill="#1A5FB2"
            />
          </svg>
          Follow
        </ActionLinkButton>
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
        <ActionLinkButton
          wcolor={colorTheme.white.pure}
          wfontcolor={colorTheme.blue.w500}
          fontstyle="s_500"
          variant="contained"
        >
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 0C8.46024 0 8.83333 0.373096 8.83333 0.833333V6.66667H14.6667C15.1269 6.66667 15.5 7.03976 15.5 7.5C15.5 7.96024 15.1269 8.33333 14.6667 8.33333H8.83333V14.1667C8.83333 14.6269 8.46024 15 8 15C7.53976 15 7.16667 14.6269 7.16667 14.1667V8.33333H1.33333C0.873096 8.33333 0.5 7.96024 0.5 7.5C0.5 7.03976 0.873096 6.66667 1.33333 6.66667H7.16667V0.833333C7.16667 0.373096 7.53976 0 8 0Z"
              fill="#1A5FB2"
            />
          </svg>
          Follow
        </ActionLinkButton>
      </div>
      <div>
        <LinkButton
          wcolor={colorTheme.white.pure}
          wfontcolor={colorTheme.blue.w500}
          fontstyle="n_500"
          variant="contained"
        >
          Follow
          {/* <svg
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
          </svg> */}
          <FiChevronRight/>
        </LinkButton>
        <LinkButton
          wcolor={colorTheme.white.pure}
          wfontcolor={colorTheme.blue.w500}
          fontstyle="n_500"
          variant="contained"
        >
          Follow
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
        <LinkButton
          wcolor={colorTheme.white.pure}
          wfontcolor={colorTheme.blue.w500}
          fontstyle="s_400"
          variant="contained"
        >
          Follow
          <BiChevronRight/>
          {/* <svg
            width="6"
            height="11"
            viewBox="0 0 6 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.199951 8.61252L3.69995 5.11252L0.199951 1.61252L0.899951 0.212524L5.79995 5.11252L0.899951 10.0125L0.199951 8.61252Z"
              fill="#1A5FB2"
            />
          </svg> */}
        </LinkButton>
      </div>
      <div>
        <LinkButton
          wcolor={colorTheme.white.pure}
          wfontcolor={colorTheme.black}
          fontstyle="s_400"
          variant="contained"
        >
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.0364 0.978294C10.2672 0.882698 10.5145 0.833496 10.7643 0.833496C11.0141 0.833496 11.2615 0.882698 11.4923 0.978294C11.7231 1.07389 11.9328 1.21401 12.1094 1.39064C12.286 1.56728 12.4262 1.77698 12.5218 2.00777C12.6174 2.23856 12.6666 2.48591 12.6666 2.73571C12.6666 2.98552 12.6174 3.23287 12.5218 3.46366C12.4262 3.69445 12.286 3.90415 12.1094 4.08079L8.2914 7.89879C8.00092 8.18927 7.63172 8.38662 7.22951 8.46708C7.22947 8.46709 7.22954 8.46708 7.22951 8.46708L5.46417 8.82042C5.24561 8.86416 5.01965 8.79578 4.86201 8.6382C4.70438 8.48062 4.63592 8.25469 4.67958 8.03611L5.03236 6.27022C5.11308 5.86797 5.31103 5.4986 5.60126 5.20864C5.60137 5.20853 5.60115 5.20875 5.60126 5.20864L9.41926 1.39064C9.5959 1.21401 9.8056 1.07389 10.0364 0.978294ZM10.7643 2.16683C10.6896 2.16683 10.6157 2.18154 10.5466 2.21013C10.4776 2.23872 10.4149 2.28063 10.3621 2.33345L9.75788 2.93764L10.5626 3.74198L11.1666 3.13798C11.2194 3.08515 11.2613 3.02244 11.2899 2.95342C11.3185 2.8844 11.3332 2.81042 11.3332 2.73571C11.3332 2.66101 11.3185 2.58703 11.2899 2.51801C11.2613 2.44899 11.2194 2.38628 11.1666 2.33345C11.1138 2.28063 11.0511 2.23872 10.982 2.21013C10.913 2.18154 10.839 2.16683 10.7643 2.16683ZM9.61979 4.68479L8.81507 3.88045L6.54407 6.15145C6.44001 6.25537 6.36869 6.38808 6.3397 6.53225C6.33968 6.53235 6.33972 6.53216 6.3397 6.53225L6.18297 7.31677L6.96783 7.15968C7.11224 7.1308 7.24443 7.06014 7.3486 6.95598L9.61979 4.68479ZM2 3.50005C1.82319 3.50005 1.65362 3.57029 1.5286 3.69531C1.40357 3.82033 1.33333 3.9899 1.33333 4.16671V11.5C1.33333 11.6769 1.40357 11.8464 1.5286 11.9715C1.65362 12.0965 1.82319 12.1667 2 12.1667H9.33333C9.51014 12.1667 9.67971 12.0965 9.80474 11.9715C9.92976 11.8464 10 11.6769 10 11.5V9.50005C10 9.13186 10.2985 8.83338 10.6667 8.83338C11.0349 8.83338 11.3333 9.13186 11.3333 9.50005V11.5C11.3333 12.0305 11.1226 12.5392 10.7475 12.9143C10.3725 13.2893 9.86377 13.5 9.33333 13.5H2C1.46957 13.5 0.960859 13.2893 0.585786 12.9143C0.210714 12.5392 0 12.0305 0 11.5V4.16671C0 3.63628 0.210714 3.12757 0.585786 2.7525C0.960859 2.37743 1.46957 2.16671 2 2.16671H4C4.36819 2.16671 4.66667 2.46519 4.66667 2.83338C4.66667 3.20157 4.36819 3.50005 4 3.50005H2Z"
              fill="black"
            />
          </svg>
          Edit Profile
        </LinkButton>
      </div>
      <div>
        <RemoveConfirmation />
      </div>
      <div>
        <Overlay />
      </div>
      <div>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Remy Sharp"
            src="/assets/images/avatar/1.jpg"
            sx={{ width: avatarSize.xs, height: avatarSize.xs }}
          />
          <Avatar
            alt="Remy Sharp"
            src="/assets/images/avatar/1.jpg"
            sx={{ width: avatarSize.xm, height: avatarSize.xm }}
          ></Avatar>
          <Avatar
            alt="Remy Sharp"
            src="/assets/images/avatar/1.jpg"
            sx={{ width: avatarSize.md, height: avatarSize.md }}
          ></Avatar>
          <Avatar
            alt="Remy Sharp"
            src="/assets/images/avatar/1.jpg"
            sx={{ width: avatarSize.lg, height: avatarSize.lg }}
          ></Avatar>
          <Avatar
            alt="Remy Sharp"
            src="/assets/images/avatar/1.jpg"
            sx={{ width: avatarSize.xl, height: avatarSize.xl }}
          ></Avatar>
          <Avatar
            alt="Remy Sharp"
            src="/assets/images/avatar/1.jpg"
            sx={{ width: avatarSize.xxl, height: avatarSize.xxl }}
          ></Avatar>
        </Stack>
      </div>
      <div>
        {/* <CustomInput disabled="false"/>
        <CustomInput disabled="true"/> */}
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <Input
            placeholder="Search Employees, Companies"
            inputProps={ariaLabel}
          />
          <Input placeholder="" inputProps={ariaLabel} />
          <Input disabled defaultValue="Disabled text" inputProps={ariaLabel} />
        </Box>
      </div>
      <div>
        <Customcheckbox />
      </div>
      <div>{/* <Customcalendar /> */}</div>
    </>
  );
}

export default App;
