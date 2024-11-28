import { Button, responsiveFontSizes } from '@mui/material'
import React from 'react'
import { RootCss } from '../../../ui/RootCss'

const FilledButton = ({
    title,
    onClick,
    disabled,
    startIcon
    // size,
    // backgroundColor,
    // backgroundCOlorHoever
    // fontFamily
    // FontSizes
    // width
    // disableelevation
}) => {
    return (
        <Button
            variant='contained'
            onClick={onClick}
            size='small'
            disableElevation
            startIcon = {startIcon}
            sx={{
                backgroundColor: `${RootCss.colors.primaryColor}`,
                color: 'white',
                fontFamily: `${RootCss.fonts.mainFont}`,
                width: '100%',
                height: '40px',
                fontWeight: 'bold',
                '&:hover': {
                    backgroundColor: `${RootCss.colors.primaryColorHover}`,
                }
            }}
            disabled={disabled}
        >
            {title}
        </Button>
    )
}

export default FilledButton
