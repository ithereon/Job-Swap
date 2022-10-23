import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import colorTheme from '../styles/color';

// export default function CheckboxLabels() {
//   return (
//     <FormGroup>
//       <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
//       <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
//     </FormGroup>
//   );
// }

const typePattern = {
    big:{
        fontSize: 24,
        fontWeight: 600,
        lineHeight: '33.6px',
        padding: '20px 36px'
    },
    medium:{
        fontSize: 20,
        fontWeight: 600,
        lineHeight: '30px',
        padding: '18px 32px'
    },
    normal:{
        fontSize: 16,
        fontWeight: 600,
        lineHeight: '24px',
        padding: '10px 20px'
    },
    small:{
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '21px',
        padding: '8px 16px'
    }
}

const Customcheckbox = styled(Checkbox)(() => ({
    color: colorTheme.blue.w400,
    
}));

export default React.memo(Customcheckbox);