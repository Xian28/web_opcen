import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { HomeCss } from './HomeCss'
import MenuIcon from '@mui/icons-material/Menu';
import ocdLogo from '../../assets/ocdlogo.png'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import BasicSnackbar from '../../components/BasicSnackbar/BasicSnackbar';
import Loader from '../../components/Loader/Loader';
import Sidebar from '../Sidebar/Sidebar';
import { RootCss } from '../../ui/RootCss';

const Home = () => {
    // snackbar components
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [severity, setSeverity] = useState('')
    const [snackbarMessage, setSnackbarMessage] = useState('')
    const handleCloseSnackbar = (event, reason) => {
        if(reason === 'clickaway'){
            return
        }
        setOpenSnackBar(false)
    }

    // visibility state of loading pop up
    const [visibility, setVisibility] = useState(false)

    // minimizing sidebar
    const [sidebarLength, setSidebarLength] = useState('250px')

    const [pageTitle, setPageTitle] = useState('')

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

    const selectMenu = (name,label) => {
        var sideBarMenus = document.getElementsByClassName('sidebarMenus')
        for(var i = 0; i < sideBarMenus.length; i++ ){
            sideBarMenus[i].style.background = 'transparent'
        }
        
        var selected = document.getElementById(name)
        if(selected){
            selected.style.background = `${RootCss.colors.secondaryColor}`
        }

        if(name == 'dashboard'){
            name = ''
        }
        navigate('/' + name)
        setPageTitle(label)
    }

    const location = useLocation()

    const navigate = useNavigate()

    useEffect(() => {
        // alert('test' )
        const parsedTitle = location.pathname.split('/').pop().replace(/\W/g, ' ')
        if(parsedTitle == '' || parsedTitle == 'home'){
            setPageTitle('Dashboard')
        }
        else if(parsedTitle == 'incident_reports'){
            setPageTitle('Incident Reports')
        }
        else{
            setPageTitle(parsedTitle.charAt(0).toUpperCase() + parsedTitle.slice(1))
        }
    }, [location])

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
                    <Sidebar
                        selectMenu = {selectMenu}
                    />
                </Box>
                <Box sx={HomeCss.contentContainer}>
                    <Box sx={HomeCss.pageTitle}>
                        {pageTitle}
                        {/* Page title goes here */}
                    </Box>
                    <Outlet />
                </Box>
            </Box>
            {/* <AdminHomeChangePassword
                open={open}
                handleClose={handleClose}
            /> */}
            <BasicSnackbar
                open={openSnackBar}
                severity={severity}
                message={snackbarMessage}
                onClose={handleCloseSnackbar}
                fontSize='14px'
            />
            {
                visibility ? (
                    <Loader/>
                ) : null
            }
        </Box>
    )
}

export default Home
