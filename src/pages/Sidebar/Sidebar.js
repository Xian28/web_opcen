import { Box, Typography } from '@mui/material'
import React from 'react'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { SidebarCss } from './SidebarCss';

const Sidebar = ({
    selectMenu
}) => {
    const admin = [
        {
            'name': 'dashboard',
            'label': 'Dashboard',
            'icon': <DashboardOutlinedIcon 
                        sx={{
                            color: 'white'
                        }}
                        fontSize='medium'
                    />
        },
        {
            'name': 'users',
            'label': 'Users',
            'icon': <PeopleAltOutlinedIcon 
                        sx={{
                            color: 'white'
                        }}
                        fontSize='medium'
                    />
        }
    ]
    return (
        <>
            {admin.map((values, index) => (
                <Box
                key={index}
                sx={SidebarCss.sideBarMenuContainer}
                className='sidebarMenus'
                id={values.name}
                onClick = {() => {
                    selectMenu(values.name,values.label)
                }}
                >
                    <Box sx={SidebarCss.iconContainer}>
                        {values.icon}
                    </Box>
                    <Typography
                        sx={SidebarCss.labelContainer}
                        className='sidebarMenuLabels'
                    >
                        {values.label}
                    </Typography>
                </Box>
            ))}
        </>
    )
}

export default Sidebar
