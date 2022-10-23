import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const avatarSize = {
  xs: "28px",
  xm: "36px",
  md: "48px",
  lg: "56px",
  xl: "80px",
  xxl: "120px",
};

const ImageAvatars = ({ src, size }) => {
  return (
    // <Stack direction="row" spacing={0}>
    //   <Avatar
    //     alt="Remy Sharp"
    //     src="/static/images/avatar/1.jpg"
    //     sx={{ width: 24, height: 24 }}
    //   />
    //   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    //   <Avatar
    //     alt="Remy Sharp"
    //     src="/static/images/avatar/1.jpg"
    //     sx={{ width: 56, height: 56 }}
    //   />
    // </Stack>
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="../../public/assets/images/avatar/1.jpg"
        sx={{ width: avatarSize.xs, height: avatarSize.xs }}
      ></Avatar>
      <Avatar
        alt="Remy Sharp"
        src="../../public/assets/images/avatar/1.jpg"
        sx={{ width: avatarSize.xm, height: avatarSize.xm }}
      ></Avatar>
      <Avatar
        alt="Remy Sharp"
        src="../../public/assets/images/avatar/1.jpg"
        sx={{ width: avatarSize.md, height: avatarSize.md }}
      ></Avatar>
      <Avatar
        alt="Remy Sharp"
        src="../../public/assets/images/avatar/1.jpg"
        sx={{ width: avatarSize.lg, height: avatarSize.lg }}
      ></Avatar>
      <Avatar
        alt="Remy Sharp"
        src="../../public/assets/images/avatar/1.jpg"
        sx={{ width: avatarSize.xl, height: avatarSize.xl }}
      ></Avatar>
      <Avatar
        alt="Remy Sharp"
        src="../../public/assets/images/avatar/1.jpg"
        sx={{ width: avatarSize.xxl, height: avatarSize.xxl }}
      ></Avatar>
    </Stack>
    
  );
};

export default ImageAvatars;

// const typePattern = {
//   full:{
//       border: "none"
//   },
//   nofull:{
//       border: "1px solid #1A5FB2"
//   },
// }

// const FooterButton = styled(Button)(({wtype, wcolor, wfontcolor, fontstyle}) => ({
//   color: wfontcolor,
//   backgroundColor: wcolor,
//   padding: "8px 16px",
//   fontSize: 16,
//   borderRadius: 100,
//   fontWeight: 500,
//   lineHeight: "15px",
//   border: typePattern[wtype].border,
//   gap: '6px'
// }));

// export default React.memo(FooterButton);
