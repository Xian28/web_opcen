import { Box, InputAdornment } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { LandingPageCss } from './LandingPageCss'
import ocdLogo from '../../assets/ocdlogo.png'
import { StyledTextField } from '../../components/Styled/StyledTextField'
import PersonIcon from '@mui/icons-material/Person'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import { RootCss } from '../../ui/RootCss'
import FilledButton from '../../components/BasicButton/FilledButton/FilledButton'
import heroImage from '../../assets/heroImage.svg'
import { keyPress } from '../../functions/Keypress'
import { inputValidation } from '../../functions/InputValidation'
import { scrollIntoInvalidInput } from '../../functions/ScrollIntoInvalidInput'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IP } from '../../ip/IP'
import { API } from '../../functions/API'
import Loader from '../../components/Loader/Loader'
import BasicSnackbar from '../../components/BasicSnackbar/BasicSnackbar'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    // snackbar components
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [severity, setSeverity] = useState('')
    const [snackbarMessage, setSnackbarMessage] = useState('')
    const handleCloseSnackbar = (event, reason) => {
        if(reason === 'clickaway'){
            return
        }
        setOpenSnackBar(false)
    }
    // for routing
    const navigate = useNavigate()

    // visibility state of loading pop up
    const [visibility, setVisibility] = useState(false)

    // login button disable status
    const [loginButtonDisabled, setLoginButtonDisabled] = useState(false)

    // inputs error handling
    // inputs error handling
    const [usernameInputErrorState, setUsernameInputErrorState] = useState(false)
    const [usernameInputHelperTextState, setUsernameInputHelperTextState] = useState(' ')
    const [passwordInputErrorState, setPasswordInputErrorState] = useState(false)
    const [passwordInputHelperTextState, setPasswordInputHelperTextState] = useState(' ')

    const showPassword = () => {
        var showPasswordIcon = document.getElementById('showPasswordIcon')
        var hidePasswordIcon = document.getElementById('hidePasswordIcon')
        var passwordInput = document.getElementById('passwordInput')
        showPasswordIcon.style.display = 'block'
        hidePasswordIcon.style.display = 'none'
        passwordInput.type = 'text'
    }

    const hidePassword = () => {
        var hidePasswordIcon = document.getElementById('hidePasswordIcon')
        var showPasswordIcon = document.getElementById('showPasswordIcon')
        var passwordInput = document.getElementById('passwordInput')
        hidePasswordIcon.style.display = 'block'
        showPasswordIcon.style.display = 'none'
        passwordInput.type = 'password'
    }

    const login = () => {
        if(loginButtonDisabled){
            return //this will end this function
        }

        // most top input with invalid value
        var mostTopInvalidInput = '';

        //initialization of valid inputs
        var invalidInputCounter  = 0
        var usernameInput = document.getElementById('usernameInput').value
        var passwordInput = document.getElementById('passwordInput').value
        
        if(inputValidation(
            usernameInput.trim().length == 0,
                setUsernameInputErrorState,
                setUsernameInputHelperTextState,
                'Please enter your username or email'
            ) == 'invalid'
        ){
            mostTopInvalidInput = (
                mostTopInvalidInput == '' ? 'usernameInput' :
                mostTopInvalidInput
            )
            invalidInputCounter ++;
        }

        if(inputValidation(
            passwordInput.trim().length == 0,
                setPasswordInputErrorState,
                setPasswordInputHelperTextState,
                'Please enter your password'
            ) == 'invalid'
        ){
            mostTopInvalidInput = (
                mostTopInvalidInput == '' ? 'passwordInput' :
                mostTopInvalidInput
            )
            invalidInputCounter ++;
        }

        // will scroll to most top invalid input
        if(mostTopInvalidInput != ''){
            scrollIntoInvalidInput(mostTopInvalidInput)
            document.getElementById(mostTopInvalidInput).focus()
        }

        // all inputs are valid and will now submit data
        if(invalidInputCounter == 0){
            setLoginButtonDisabled(true)
            setVisibility(true)
            var userJSON = {
                username: usernameInput,
                password: passwordInput
            }
            fetch(API() + '/employees',
                {
                    method: 'GET', //should be POST when using real API
                    // headers: {
                    //     'Content-Type': 'application/json',
                    // },
                    // body: JSON.stringify(userJSON)
                }
            )
            .then(response => response.json())
            .then(users => {
                const user = users.find(u => u.username === userJSON.username && u.password === userJSON.password)

                if(user){
                    setTimeout(() => {
                        setOpenSnackBar(true)
                        setSeverity('success')
                        setSnackbarMessage('Welcome ' + user.firstName + ' ' + user.middleName.charAt(0) + '. ' + user.lastName)
                        navigate('home')
                        setLoginButtonDisabled(false)
                        setVisibility(false)
                        // alert('Welcome ' + user.firstName + ' ' + user.middleName.charAt(0) + '. ' + user.lastName)
                    }, 1500);
                }
                else{
                    setTimeout(() => {
                        // alert('Oops. Username and password do not matched. Please try again.')
                        setOpenSnackBar(true)
                        setSeverity('error')
                        setSnackbarMessage('Oops. Username and password do not matched. Please try again.')
                        setLoginButtonDisabled(false)
                        setVisibility(false)
                    }, 1500);
                }
            })
            .catch(error => {
                // alert('Sorry, a problem has occured while logging in. Error Code: A0001')
                setOpenSnackBar(true)
                setSeverity('error')
                setSnackbarMessage('Sorry, a problem has occured while logging in. Error Code: A0001')
                setLoginButtonDisabled(false)
                setVisibility(false)
            })
        }
    }

    return (
        <Box sx={LandingPageCss.wrapper}>
            <Box
                sx={LandingPageCss.headerContainer}
            >
                <Box sx={LandingPageCss.header}>
                    <Box sx={LandingPageCss.headerLogoContainer}>
                        <Box
                            component='img'
                            src={ocdLogo}
                        />
                    </Box>
                    <Box sx={LandingPageCss.headerLogoName}>
                        IMRS
                    </Box>
                </Box>
            </Box>
            <Box sx={LandingPageCss.bodyContainer}>
                <Box sx={LandingPageCss.body}>
                    <Box sx={LandingPageCss.leftBodyContainer}>
                        <Box sx={LandingPageCss.loginContainer}>
                            <Box sx={LandingPageCss.loginCaption}>
                                Login
                            </Box>
                            <StyledTextField
                                error={usernameInputErrorState}
                                helperText={usernameInputHelperTextState}
                                sx={LandingPageCss.inputField}
                                size='small'
                                id='usernameInput'
                                type='text'
                                placeholder='Username or Email'
                                name='userName'
                                label='Username or Email'
                                defaultValue=''
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <PersonIcon
                                                sx={{
                                                    // color: 'red'
                                                }}
                                            />
                                        </InputAdornment>
                                    ),
                                    inputProps: {
                                        maxLength: 50,
                                        style: { 
                                            fontSize: '16px',
                                        }
                                    }
                                }}
                                onKeyDown={(event) => {
                                    keyPress(event,login)
                                }}
                            />
                            <StyledTextField
                                error={passwordInputErrorState}
                                helperText={passwordInputHelperTextState}
                                sx={LandingPageCss.inputField}
                                size='small'
                                id='passwordInput'
                                type='password'
                                placeholder='Password'
                                name='password'
                                label='Password'
                                defaultValue=''
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <VpnKeyIcon
                                                sx={{
                                                    // color: 'red'
                                                }}
                                            />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment 
                                            position="end"
                                            sx={{cursor: 'pointer'}}
                                        >
                                            <VisibilityIcon 
                                                id='showPasswordIcon'
                                                onClick={hidePassword}
                                                 sx={{
                                                    display: 'none'
                                                }}
                                            />
                                            <VisibilityOffIcon 
                                                id='hidePasswordIcon'
                                                onClick={showPassword}
                                                 sx={{
                                                    display: 'block'
                                                }}
                                            />
                                        </InputAdornment>
                                    ),
                                    inputProps: {
                                        maxLength: 50,
                                        style: { 
                                            fontSize: '16px',
                                        }
                                    }
                                }}
                                onKeyDown={(event) => {
                                    keyPress(event,login)
                                }}
                            />
                            <Box sx={LandingPageCss.loginButtonContainer}>
                                <FilledButton
                                    id='test'
                                    title={'LOGIN'}
                                    onClick = {() => {
                                        login()
                                    }}
                                    disabled={loginButtonDisabled}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={LandingPageCss.rightBodyContainer}>
                        <Box 
                            sx={LandingPageCss.heroImage} 
                            component='img'
                            src={heroImage}
                        />
                    </Box>
                </Box>
            </Box>
            <Box sx={LandingPageCss.footerContainer}>
                <Box sx={LandingPageCss.footer}>
                    <Box sx={LandingPageCss.footerCopyright}>
                        &copy; {new Date().getFullYear()} Office of Civil Defense RO1 . All Rights Reserved
                    </Box>
                    <Box sx={LandingPageCss.footerSlogan}>
                        SERVING THE NATION. PROTECTING THE PEOPLE
                    </Box>
                    <Box sx={LandingPageCss.footerVersoin}>
                        Build Version 1.0.0
                    </Box>
                </Box>    
            </Box>
            <BasicSnackbar
                open={openSnackBar}
                severity={severity}
                message={snackbarMessage}
                onClose={handleCloseSnackbar}
            />
            {
                visibility ? (
                    <Loader/>
                ) : null
            }
        </Box>
    )
}

export default LandingPage
