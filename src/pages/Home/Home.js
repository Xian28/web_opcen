import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { HomeCss } from './HomeCss'
import MenuIcon from '@mui/icons-material/Menu';
import ocdLogo from '../../assets/ocdlogo.png'

const Home = () => {
    // minimizing sidebar
    const [sidebarLength, setSidebarLength] = useState('250px')

    const minimizeSidebar = () => {
        var sidebar = document.getElementById('sidebar')
        if(sidebarLength == '250px'){
            setSidebarLength('40px')
            sidebar.style.width = '40px'
        }
        else if(sidebarLength == '40px'){
            setSidebarLength('250px')
            sidebar.style.width = '250px'
        }
    }
    return (
        <Box sx={HomeCss.wrapper}>
            <Box sx={HomeCss.header}>
                <Box sx={HomeCss.sidebarHeaderContainer}>
                    <Box sx={HomeCss.menuContainer}>
                        <MenuIcon
                            fontSize='medium'
                            sx={{
                                color: 'white',
                                cursor: 'pointer',
                            }}
                            onClick={() => {
                                minimizeSidebar()
                            }}
                        />
                    </Box>
                    <Box
                        component='img'
                        sx={HomeCss.sidebarLogo}
                        src={ocdLogo}
                    />
                    <Typography sx={HomeCss.sidebarSystemname}>
                        IMRS
                    </Typography>
                </Box>
                <Box sx={HomeCss.subHeaderContainer}>
                        
                </Box>
            </Box>
            <Box sx={HomeCss.bodyContainer}>
                <Box 
                    sx={HomeCss.sidebarWrapper}
                    id='sidebar'
                >

                </Box>
                <Box sx={HomeCss.contentContainer}>
                    This is content
                </Box>
            </Box>
        </Box>
    )
}

export default Home
