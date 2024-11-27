import { Box } from '@mui/material'
import React from 'react'
import { ErrorCss } from './ErrorCss'

const Error = () => {
    return (
        <Box sx={ErrorCss.wrapper}>
            Oops! This page does not exist.
        </Box>
    )
}

export default Error
