import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import BasicModal from '../../components/BasicModal/BasicModal'
import BasicSnackbar from '../../components/BasicSnackbar/BasicSnackbar'

const UsersChangeStatus = ({
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

    const modalBody = params.status == 'Active' ?
    (
        <>
            <Typography>
                Status of <b>{params.fullname}</b> will be changed to Inactive and will be restricted from logging in. Are you sure?
            </Typography>
        </>
    ) : 
    (
        <>
            <Typography>
                Status of <b>{params.fullname}</b> will be changed to Active and will be able to login. Are you sure?
            </Typography>
        </>
    )

    //change user state to inactiv or active
    const changeStatus = () => {
        setOpenSnackBar(true);
        setSeverity('success');
        setSnackBarMessage(params.status == 'Active' ? 
            params.fullname + "'s status was successfully changed to Inactive." : 
            params.fullname + "'s status was successfully changed to Active."
        )
        handleClose()
    } 

    return (
        <Box>
            <BasicModal
                open={open}
                handleClose={handleClose}
                modalTitle={params.status == 'Active' ? 
                    `Change status to Inactive` : 'Change status to Active'}
                modalBody={modalBody}
                buttonLabel='Change'
                cancelButtonLabel='Cancel'
                onClick={() => {
                    changeStatus()
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

export default UsersChangeStatus
