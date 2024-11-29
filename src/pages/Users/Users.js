import { Box, InputAdornment, Typography } from '@mui/material'
import { PageCss } from '../PageCss/PageCss'
import { StyledTextField } from '../../components/Styled/StyledTextField'
import { useState } from 'react';
import { RootCss } from '../../ui/RootCss';
import SearchIcon from '@mui/icons-material/Search';
import FilledButton from '../../components/BasicButton/FilledButton/FilledButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import UsersTable from '../../components/Tables/DynamicTables/UsersTable/UsersTable';
import { API } from '../../functions/API';
import UsersAddForm from './UsersAddForm';

const Users = () => {
    //add form 
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const openAddForm = () => {
        setOpen(true)
    }

    const [searchValue, setSearchValue] = useState('');

    const [json, setJson] = useState([])

    const showUsers = () => {
        // setVisibility('true')
        var searchKeyword = document.getElementById('searchInput').value
        fetch(API() + '/employees',
            {
                method: 'GET',
            }
        )
        .then(response => response.json())
        .then(users => {
            const customJSON = users.map((origJSON, index) => ({
                'id': index,
                'firstName': origJSON.firstName,
                'middleName': origJSON.middleName,
                'lastName': origJSON.lastName,
                'email': origJSON.email,
                'username': origJSON.username,
                'fullname': (origJSON.lastName + ", " + 
                    origJSON.firstName + " " + 
                    origJSON.middleName).toUpperCase(),
                'status': origJSON.status
            }))
            setJson(customJSON)
        })
        .catch(error => {
            alert('Sorry, a problem has occured while logging in. Error Code: A0002' + " - " + error)
            // setOpenSnackBar(true)
            // setSeverity('error')
            // setSnackbarMessage('Sorry, a problem has occured while logging in. Error Code: A0001')
            // setLoginButtonDisabled(false)
            // setVisibility(false)
        })
    }

    return (
        <Box sx={PageCss.wrapper}>
            <Box sx={PageCss.pageTitle}>
                Users
            </Box>
            <Box sx={PageCss.pageHeader}>
                <Box
                    sx={PageCss.searchInput}
                >
                    <StyledTextField
                        // error= {firstNameInputErrorState}
                        helperText='Note: Enter First or Last Name (One at a time)'
                        sx={PageCss.inputs}
                        size='small'
                        id='searchInput'
                        type='search'
                        placeholder="Search here"
                        name="search"
                        label="Search here"
                        defaultValue={searchValue}
                        InputProps={{
                            style: {
                                fontSize: '14px',
                                // padding: '7px 14px',
                                fontFamily: `${RootCss.fonts.mainFont}`
                            },
                            maxLength: 100,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon 
                                        sx={{
                                            // color: `${RootCss.colors.primaryColor}`
                                        }}
                                    />
                                </InputAdornment>
                            ),
                        }}
                        onChange={(event) => {
                            setSearchValue(event.target.value)
                            if(event.target.value.trim().length > 0){
                                document.getElementById('searchMessage').style.display = 'flex'
                            }
                            else{
                                document.getElementById('searchMessage').style.display = 'none'
                            }
                            showUsers()
                        }}
                    />
                </Box>
                <Box sx={PageCss.headerButton}>
                    <FilledButton
                        title='New'
                        onClick={() => {
                            openAddForm()
                        }}
                        startIcon={
                            <AddCircleIcon />
                        }
                    />
                </Box>
            </Box>
            <Typography
                sx={PageCss.seachMessage}
                id="searchMessage"
                style={{
                    display: 'none'
                }}
            >
                Showing search results for&nbsp;<b>{searchValue}</b>...
            </Typography>
            <Box sx={PageCss.tableContainer}>
                <UsersTable
                    showUsers = {showUsers}
                    json = {json}
                />
            </Box>
            <UsersAddForm
                open={open}
                handleClose={handleClose}
                showUsers={showUsers}
            />
        </Box>
    )
}

export default Users
