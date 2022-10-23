import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import Input from '@mui/material/Input';

import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';


const ariaLabel = { 'aria-label': 'description' };

export default function CustomInput() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Input defaultValue="" inputProps={ariaLabel} />
      <Input placeholder="" inputProps={ariaLabel} />
      <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
    </Box>
  );
}





// const CssTextField = styled(TextField)({
//     '& label.Mui-focused': {
//       color: 'green',
//     },
//     '& .MuiInput-underline:after': {
//       borderBottomColor: 'green',
//     },
//     '& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         borderColor: 'red',
//       },
//       '&:hover fieldset': {
//         borderColor: 'yellow',
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: 'green',
//       },
//     },
//   });
//   const status = {
//     true: {
//         one: "true",
//         two: "Disabled text"
//     },
//     false: {
//         one: "",
//         two: "Search Employees, Companies"
//     },
//   }

// export default function CustomInput({disabled}) {
//   return (
//     <Paper
//       component="form"
//       sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
//     >
//       <IconButton sx={{ p: "10px" }} aria-label="menu">
//         <svg
//           width="18"
//           height="18"
//           viewBox="0 0 18 18"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M4.50279 0.308222C4.33169 0.386928 4.19139 0.54776 4.14348 0.718859C4.12637 0.787298 4.10926 1.00288 4.10926 1.19109V1.54013L3.43513 1.55382C2.67545 1.57093 2.4804 1.61541 2.05608 1.84469C1.71388 2.03289 1.31351 2.45722 1.13557 2.81653C0.851545 3.39484 0.875499 2.79257 0.875499 9.65704C0.875499 16.5112 0.854967 15.9192 1.13215 16.4873C1.38537 17.0074 1.87814 17.4352 2.46329 17.6439L2.75758 17.75H15.8637L16.1375 17.6542C16.9074 17.3838 17.4755 16.7713 17.6842 15.9877C17.7424 15.7789 17.7458 15.3752 17.7458 9.65704C17.7458 2.78915 17.7698 3.39826 17.4823 2.8131C17.2804 2.40247 16.8732 1.99525 16.4626 1.79678C16.0622 1.5983 15.7679 1.54698 15.0767 1.54698H14.512V1.19451C14.512 0.780454 14.4744 0.626465 14.3375 0.469055C14.0398 0.133702 13.4752 0.202141 13.2801 0.602512C13.222 0.722281 13.2117 0.814674 13.2117 1.1466V1.54698H5.41645L5.40276 1.10896C5.3925 0.712015 5.38565 0.657263 5.31037 0.54776C5.12216 0.277425 4.78681 0.174766 4.50279 0.308222ZM4.1161 3.24769C4.12979 3.7165 4.18454 3.86023 4.38986 4.01079C4.63967 4.19216 4.95791 4.17505 5.19402 3.96631C5.37539 3.80547 5.40961 3.69597 5.40961 3.24085V2.84732H13.2117V3.24085C13.2117 3.69597 13.2459 3.80547 13.4273 3.96631C13.6702 4.17847 14.0022 4.18874 14.2588 3.99368C14.4402 3.8568 14.4915 3.70282 14.5052 3.24769L14.5189 2.84732H15.063C15.5249 2.84732 15.631 2.85759 15.7919 2.91576C16.028 3.00473 16.2367 3.20663 16.3531 3.45643L16.4455 3.65149L16.4557 4.70203L16.4694 5.756H2.15189L2.16558 4.70203C2.17585 3.78494 2.18611 3.63438 2.23744 3.51461C2.33326 3.2956 2.46329 3.13477 2.61044 3.03553C2.85682 2.87128 2.95948 2.85075 3.54806 2.85075L4.10242 2.84732L4.1161 3.24769ZM16.4455 15.6626L16.3565 15.8508C16.2504 16.0767 16.0656 16.2649 15.85 16.3709L15.6926 16.4497H2.92868L2.77127 16.3709C2.55226 16.2649 2.3709 16.0801 2.26482 15.8542L2.17585 15.6626L2.15874 7.05635H16.4626L16.4455 15.6626Z"
//             fill="black"
//           />
//         </svg>
//       </IconButton>
//       <InputBase
//         sx={{ ml: 1, flex: 1 }}
//         placeholder="Search Google Maps"
//         inputProps={{ "aria-label": {} }}
//         disabled = {status[disabled]}
//       />
//       <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
//         <SearchIcon />
//       </IconButton>
//     </Paper>
//   );
// }
