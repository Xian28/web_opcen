import { Box, Snackbar } from '@mui/material'
import React, { forwardRef } from 'react'
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props,ref ) {
    return <MuiAlert elevetion={6} ref={ref} variant="filled" {...props} />
})

const BasicSnackbar = ({
    open,
    onClose,
    severity,
    message
}) => {
    return (
        <Box>
            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={onClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                key={message}
            >
                <Alert
                    onClose={onClose}
                    severity={severity}
                    sx={{
                        width: '100%',
                        fontSize: '16px',
                        whiteSpace: 'pre-wrap'
                    }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default BasicSnackbar
