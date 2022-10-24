import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { AiOutlineCalendar } from "react-icons/ai";
import "../../styles/components/form/customSearchInput.scss";
import { fontSize } from '@mui/system';

export default function CustomizedInputBase({ disable = false, size = 'medium' }) {
    return (
        <Paper
            component="form"
            className='custom-input-search'
            sx={{ p: size == 'small' ? '1px 4px' : '2px 4px', display: 'flex', alignItems: 'center', width: 400, borderRadius: '5px' }}
        >
            <IconButton sx={{ p: size == 'small' ? '5px' : '10px', color: disable ? '#BBBFC4' : '', fontSize: size == 'small' ? '20px' : '1.5rem' }} aria-label="menu">
                <AiOutlineCalendar />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder={disable ? "Disabled text" : "Search Employees, Companies"}
                inputProps={{ 'aria-label': 'search' }}
                disabled={disable}
            />
            <IconButton type="button" sx={{ p: size == 'small' ? '5px' : '10px', color: disable ? '#BBBFC4' : '' }} aria-label="search">
                <SearchIcon sx={{fontSize: size == 'small' ? '20px' : '1.5rem'}}/>
            </IconButton>
        </Paper>
    );
}
