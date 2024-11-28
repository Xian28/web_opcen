import { Box, Menu } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const BasicMenu = ({
    button,
    menu
}) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <Box onClick={handleClick}>
                {button}
            </Box>
            <Menu
                sx={{
                    zIndex: '10'
                }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
                disableAutoFocusItem
            >
                {menu}
            </Menu>
        </>
    )
}

export default BasicMenu
