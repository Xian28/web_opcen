import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BasicModal from '../../components/BasicModal/BasicModal'
import { StyledTextField } from '../../components/Styled/StyledTextField'
import { PageCss } from '../PageCss/PageCss'
import { RootCss } from '../../ui/RootCss'
import { keyPress } from '../../functions/Keypress'
import { inputValidation } from '../../functions/InputValidation'
import { scrollIntoInvalidInput } from '../../functions/ScrollIntoInvalidInput'
import BasicSnackbar from '../../components/BasicSnackbar/BasicSnackbar'

const UsersManageForm = ({
    open,
    handleClose,
    showUsers,
    params
}) => {
    // handling textfield errors
    const [userFirstNameInputErrorState, setUserFirstNameInputErrorState] = useState(false)
    const [userFirstNameInputHelperTextState, setUserFirstNameInputHelperTextState] = useState(' ')
    const [userMiddleNameInputErrorState, setUserMiddleNameInputErrorState] = useState(false)
    const [userMiddleNameInputHelperTextState, setUserMiddleNameInputHelperTextState] = useState(' ')
    const [userLastNameInputErrorState, setUserLastNameInputErrorState] = useState(false)
    const [userLastNameInputHelperTextState, setUserLastNameInputHelperTextState] = useState(' ')
    const [userEmailInputErrorState, setUserEmailInputErrorState] = useState(false)
    const [userEmailInputHelperTextState, setUserEmailInputHelperTextState] = useState(' ')
    const [userUsernameInputErrorState, setUserUsernameInputErrorState] = useState(false)
    const [userUsernameInputHelperTextState, setUserUsernameInputHelperTextState] = useState(' ')

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
            <StyledTextField
                error= {userFirstNameInputErrorState}
                helperText={userFirstNameInputHelperTextState}
                sx={PageCss.formInput}
                size='small'
                id='userFirstnameInput'
                type='text'
                placeholder="First Name"
                name="userFirstName"
                label="First Name"
                defaultValue={params.firstName}
                margin='none'
                autoComplete="off"
                inputProps={{
                    style: {
                        fontSize: '16px',
                        padding: '7px 14px',
                        fontFamily: `${RootCss.fonts.mainFont}`,
                    },
                    maxLength: 50
                }}
                onKeyDown={(event) => {
                    keyPress(event,editUser)
                }}
            />
            <StyledTextField
                error= {userMiddleNameInputErrorState}
                helperText={userMiddleNameInputHelperTextState}
                sx={PageCss.formInput}
                size='small'
                id='userMiddlenameInput'
                type='text'
                placeholder="Middle Name"
                name="userMiddleName"
                label="Middle Name"
                defaultValue={params.middleName}
                margin='none'
                autoComplete="off"
                inputProps={{
                    style: {
                        fontSize: '16px',
                        padding: '7px 14px',
                        fontFamily: `${RootCss.fonts.mainFont}`,
                    },
                    maxLength: 50
                }}
                onKeyDown={(event) => {
                    keyPress(event,editUser)
                }}
            />
            <StyledTextField
                error= {userLastNameInputErrorState}
                helperText={userLastNameInputHelperTextState}
                sx={PageCss.formInput}
                size='small'
                id='userLastnameInput'
                type='text'
                placeholder="Last Name"
                name="userLastName"
                label="Last Name"
                defaultValue={params.lastName}
                margin='none'
                autoComplete="off"
                inputProps={{
                    style: {
                        fontSize: '16px',
                        padding: '7px 14px',
                        fontFamily: `${RootCss.fonts.mainFont}`,
                    },
                    maxLength: 50
                }}
                onKeyDown={(event) => {
                    keyPress(event,editUser)
                }}
            />
            <StyledTextField
                error= {userEmailInputErrorState}
                helperText={userEmailInputHelperTextState}
                sx={PageCss.formInput}
                size='small'
                id='userEmailInput'
                type='text'
                placeholder="Email"
                name="userEmail"
                label="Email"
                defaultValue={params.email}
                margin='none'
                autoComplete="off"
                inputProps={{
                    style: {
                        fontSize: '16px',
                        padding: '7px 14px',
                        fontFamily: `${RootCss.fonts.mainFont}`,
                    },
                    maxLength: 50
                }}
                onKeyDown={(event) => {
                    keyPress(event,editUser)
                }}
            />
            <StyledTextField
                error= {userUsernameInputErrorState}
                helperText={userUsernameInputHelperTextState}
                sx={PageCss.formInput}
                size='small'
                id='userUsernameInput'
                type='text'
                placeholder="Username"
                name="userUsername"
                label="Username"
                defaultValue={params.username}
                margin='none'
                autoComplete="off"
                inputProps={{
                    style: {
                        fontSize: '16px',
                        padding: '7px 14px',
                        fontFamily: `${RootCss.fonts.mainFont}`,
                    },
                    maxLength: 50
                }}
                onKeyDown={(event) => {
                    keyPress(event,editUser)
                }}
            />
        </>
    )

    // edit button disable status
    const [editButtonDisabled, setEditButtonDisabled] = useState(false)

    const editUser = () => {
        if(editButtonDisabled){
            return //this will end this function
        }

        // most top input with invalid value
        var mostTopInvalidInput = '';

        //initialization of valid inputs
        var invalidInputCounter = 0
        var userFirstnameInput = document.getElementById('userFirstnameInput').value.trim()
        var userMiddlenameInput = document.getElementById('userMiddlenameInput').value.trim()
        var userLastnameInput = document.getElementById('userLastnameInput').value.trim()
        var userEmailInput = document.getElementById('userEmailInput').value.trim()
        var userUsernameInput = document.getElementById('userUsernameInput').value.trim()

        if(inputValidation(
            userFirstnameInput.length == 0,
                setUserFirstNameInputErrorState,
                setUserFirstNameInputHelperTextState,
                "Please enter the user's First Name"
            ) == 'invalid'
        ){
            mostTopInvalidInput = (
                mostTopInvalidInput == '' ? 'userFirstnameInput' :
                mostTopInvalidInput
            )
            invalidInputCounter ++;
        }

        if(inputValidation(
            userLastnameInput.length == 0,
                setUserLastNameInputErrorState,
                setUserLastNameInputHelperTextState,
                "Please enter the user's Last Name"
            ) == 'invalid'
        ){
            mostTopInvalidInput = (
                mostTopInvalidInput == '' ? 'userLastnameInput' :
                mostTopInvalidInput
            )
            invalidInputCounter ++;
        }

        if(inputValidation(
            userEmailInput.length == 0,
                setUserEmailInputErrorState,
                setUserEmailInputHelperTextState,
                "Please enter the user's Email"
            ) == 'invalid'
        ){
            mostTopInvalidInput = (
                mostTopInvalidInput == '' ? 'userEmailInput' :
                mostTopInvalidInput
            )
            invalidInputCounter ++;
        }
        else{
            if(inputValidation(
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmailInput) === false,
                    setUserEmailInputErrorState,
                    setUserEmailInputHelperTextState,
                    "Please enter valid email format"
                ) == 'invalid'
            ){
                mostTopInvalidInput = (
                    mostTopInvalidInput == '' ? 'userEmailInput' :
                    mostTopInvalidInput
                )
                invalidInputCounter ++;
            }
        }

        if(inputValidation(
            userUsernameInput.length == 0,
                setUserUsernameInputErrorState,
                setUserUsernameInputHelperTextState,
                "Please enter the user's Username"
            ) == 'invalid'
        ){
            mostTopInvalidInput = (
                mostTopInvalidInput == '' ? 'userUsernameInput' :
                mostTopInvalidInput
            )
            invalidInputCounter ++;
        }
        else{
            if(inputValidation(
                /^[a-zA-Z0-9_-]+$/.test(userUsernameInput) === false,
                    setUserUsernameInputErrorState,
                    setUserUsernameInputHelperTextState,
                    "Please enter alphanumeric characters, underscores, and dashes only"
                ) == 'invalid'
            ){
                mostTopInvalidInput = (
                    mostTopInvalidInput == '' ? 'userUsernameInput' :
                    mostTopInvalidInput
                )
                invalidInputCounter ++;
            }
            else{
                if(inputValidation(
                    userUsernameInput.length < 3 || userUsernameInput.length > 15,
                        setUserUsernameInputErrorState,
                        setUserUsernameInputHelperTextState,
                        "Please enter 3 to 15 characters only"
                    ) == 'invalid'
                ){
                    mostTopInvalidInput = (
                        mostTopInvalidInput == '' ? 'userUsernameInput' :
                        mostTopInvalidInput
                    )
                    invalidInputCounter ++;
                }
            }
        }

        // will scroll to most top invalid input
        if(mostTopInvalidInput != ''){
            scrollIntoInvalidInput(mostTopInvalidInput)
            document.getElementById(mostTopInvalidInput).focus()
        }

        if(invalidInputCounter == 0){
            // checking if there is any field that has changed
            if(
                userFirstnameInput == params.firstName &&
                userMiddlenameInput == params.middleName &&
                userLastnameInput == params.lastName &&
                userEmailInput == params.email &&
                userUsernameInput == params.username
            ){
                setOpenSnackBar(true);
                setSeverity('warning');
                setSnackBarMessage('No details has changed.')
            }
            else{
                alert('will now edit the user')
            }
        }
    }

    useEffect(() => {
        // clears the forms on close or pop up
        setUserFirstNameInputErrorState(false)
        setUserFirstNameInputHelperTextState(' ')
        setUserMiddleNameInputErrorState(false)
        setUserMiddleNameInputHelperTextState(' ')
        setUserLastNameInputErrorState(false)
        setUserLastNameInputHelperTextState(' ')
        setUserEmailInputErrorState(false)
        setUserEmailInputHelperTextState(' ')
        setUserUsernameInputErrorState(false)
        setUserUsernameInputHelperTextState(' ')
    }, [open])

    return (
        <Box>
            <BasicModal
                open={open}
                handleClose={handleClose}
                modalTitle='Edit User Details'
                modalBody={modalBody}
                buttonLabel='Edit'
                cancelButtonLabel='Cancel'
                onClick={() => {
                    editUser()
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

export default UsersManageForm
