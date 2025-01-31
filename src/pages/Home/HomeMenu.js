import { Box } from '@mui/material'
import React from 'react'
import { HomeCss } from './HomeCss'

const HomeMenu = () => {
    return (
        <Box>
            <Box 
                sx={HomeCss.avatarMenu}
                // onClick = {() => {
                //     Cookies.remove('token')
                //     Cookies.remove('role')
                //     navigate('/')
                // }}
            >
                Logout
            </Box>
        </Box>
    )
}

export default HomeMenu
