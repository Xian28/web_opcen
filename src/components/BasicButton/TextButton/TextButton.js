import { Button } from '@mui/material'
import React from 'react'
import { RootCss } from '../../../ui/RootCss'

const TextButton = ({
    title,
    onClick,
    disabled,
    startIcon,
    isCancelButton
}) => {
    return (
        <Button
            variant='text'
            onClick={onClick}
            size='small'
            disableElevation
            startIcon = {startIcon}
            sx={{
                backgroundColor: `transparent`,
                color: `${RootCss.colors.neutralColor}`,
                fontFamily: `${RootCss.fonts.mainFont}`,
                width: '100%',
                height: '40px',
                fontWeight: 'bold',
                marginRight: isCancelButton ? '10px' : '0px',
                '&:hover': {
                    backgroundColor: `${RootCss.colors.neutralColorHover}`,
                }
            }}
            disabled={disabled}
        >
            {title}
        </Button>
    )
}

export default TextButton
