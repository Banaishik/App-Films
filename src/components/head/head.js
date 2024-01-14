import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

import "./head.css"

const Head = () => {   
    return (
        <>
            <Box className="head">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            Films
                        </Typography>
                        <Typography variant="h6" style={{ flexGrow: 0.02 }}>
                            <Link to='/createAccount'>
                                <button className='create_account'>Create Account</button>
                            </Link>                            
                        </Typography>
                    </Toolbar>
                </AppBar>                
            </Box>
        </>
    )
}
export default Head