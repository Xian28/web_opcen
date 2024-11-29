import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import BasicModal from '../../components/BasicModal/BasicModal'
import { PageCss } from '../PageCss/PageCss'
import BasicSnackbar from '../../components/BasicSnackbar/BasicSnackbar'

const UserResetPassword = ({
    open,
    handleClose,
    showUsers,
    params
}) => {
    // handling snackbar
    const [visibility, setVisibility] = useState('false')
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [severity, setSeverity] = useState('')
    const [snackBarMessage, setSnackBarMessage] = useState('')
    const handleCloseSnackBar = (event, reason) => {
        if(reason === 'clickaway') {
            return;
        }
        setOpenSnackBar(false);
    }

    const modalBody = (
        <>
            <Typography
                sx={PageCss.modalNote}
            >
                Are you sure you want to reset password of <b>{params.fullname}</b>
                's account to default?
            </Typography>
        </>
    )

    // reset password
    const resetPassword = () => {
        // resetting password of staff
        // setVisibility('true')

        setOpenSnackBar(true);
        setSeverity('success');
        setSnackBarMessage(params.fullname + "'s password was successfully reset to default.")
        handleClose()
        setVisibility('false')
    }

    return (
        <Box>
            <BasicModal
                open={open}
                handleClose={handleClose}
                modalTitle='Reset User Password'
                modalBody={modalBody}
                buttonLabel='Reset'
                cancelButtonLabel='Cancel'
                onClick={() => {
                    resetPassword()
                }}
            />
            <BasicSnackbar
                open={openSnackBar}
                severity={severity}
                message={snackBarMessage}
                onClose={handleCloseSnackBar}
            />
        </Box>
    )
}

export default UserResetPassword
