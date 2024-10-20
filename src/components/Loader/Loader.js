import { Box } from '@mui/material'
import React from 'react'
import ReactLoading from 'react-loading';
import { RootCss } from '../../ui/RootCss';

const Loader = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            position: 'absolute',
            top: 0,
            left: 0,
            background: 'linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9))',
            zIndex: '20'
        }}>
            <ReactLoading type={'balls'} color={RootCss.colors.primaryColor} height={'40px'} width={'40px'} />
        </Box>
    )
}

export default Loader
