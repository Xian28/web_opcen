import { Box } from '@mui/material'
import React from 'react'
import { PageCss } from '../PageCss/PageCss'

const Dashboard = () => {
    return (
        <>
            <Box sx={PageCss.pageTitle}>
                Dashboard
            </Box>
            <Box>
                This is dashboard
            </Box>
        </>
    )
}

export default Dashboard
