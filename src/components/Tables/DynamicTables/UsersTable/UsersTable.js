import React, { useEffect, useState } from 'react'
import Table from '../../Table'
import { Box, Tooltip } from '@mui/material'
import { RootCss } from '../../../../ui/RootCss'
import BasicMenu from '../../../BasicMenu/BasicMenu'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { DynamicTablesCss } from '../DynamicTableCss'
import UsersManageForm from '../../../../pages/Users/UsersManageForm'

const UsersTable = ({
    showUsers,
    json
}) => {
    // user details to pass to edit form
    const [params, setParams] = useState([])

    // manageUsers FormHandlers
    const [openManageUser, setOpenManageUser] = useState(false)
    const handleCloseManageUser = () => {
        setOpenManageUser(false)
    }
    const openManageUserForm = () => {
        setOpenManageUser(true)
    }

    const userMenu = (params) => {
        return (
            <Box>
                {/* <Box 
                    sx={DynamicTablesCss.menu}
                    // onClick = {() => {
                    //     openViewEmployeeForm()
                    //     setParams(params.row)
                    // }}
                >
                    View More Details
                </Box> */}
                <Box 
                    sx={DynamicTablesCss.menu}
                    onClick = {() => {
                        openManageUserForm()
                        setParams(params.row)
                    }}
                >
                    Edit User Details
                </Box>
                {
                    // (Cookies.get().role == 3 || Cookies.get().role == 4) && (
                        <Box 
                            sx={DynamicTablesCss.menu}
                            // onClick = {() => {
                            //     openResetPasswordForm()
                            //     setParams(params.row)
                            // }}
                        >
                            Reset Password
                        </Box>
                    // )
                }
                <Box 
                    sx={DynamicTablesCss.menu}
                    // onClick = {() => {
                    //     openSetAsInactiveForm()
                    //     setParams(params.row)
                    // }}
                >
                    {label}
                </Box>
            </Box>
        )
    }

    // column fields of users table
    const columns = [
        { field: 'fullname', headerName: 'Name', minWidth:400,
            renderCell: (params) => {
                return (
                    <div
                        style={{
                            cursor: 'default',
                        }}
                    >
                        <Tooltip 
                            title={params.row.fullname} 
                            placement='top-start'
                        >
                            <div >
                                {params.row.fullname}
                            </div>
                        </Tooltip>
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', flex: 1,
            renderCell: (params) => {
                return (
                    <div
                        style={{
                            cursor: 'default',
                        }}
                    >
                        <Tooltip 
                            title={params.row.email} 
                            placement='top-start'
                        >
                            <div >
                                {params.row.email}
                            </div>
                        </Tooltip>
                    </div>
                )
            }
        },
        { field: 'username', headerName: 'Username', flex: 1,
            renderCell: (params) => {
                return (
                    <div
                        style={{
                            cursor: 'default',
                        }}
                    >
                        <Tooltip 
                            title={params.row.username} 
                            placement='top-start'
                        >
                            <div >
                                {params.row.username}
                            </div>
                        </Tooltip>
                    </div>
                )
            }
        },
        { field: 'status', headerName: 'Status', flex: 1,
            renderCell: (params) => {
                return (
                    <div
                        style={{
                            cursor: 'default',
                        }}
                    >
                        <Tooltip 
                            title={params.row.status} 
                            placement='top-start'
                        >
                            <div >
                                {params.row.status}
                            </div>
                        </Tooltip>
                    </div>
                )
            }
        },
        {
            field: 'action',
            headerName: 'Action',
            sortable: false,
            // width: 150,
            disableClickEventBubbling: true,
            renderCell: (params) => {
                return (
                    <div
                        style={{
                        display: 'flex',
                        flexGrow: '1',
                        padding: '0px 10px',
                        justifyContent: 'space-between',
                        }}
                    >
                        <div
                            style={{ 
                                cursor: "pointer", 
                                color: `${RootCss.colors.adminBaseColor}`
                            }}
                        >
                            <BasicMenu
                                button = {
                                    <>
                                        <MoreHorizOutlinedIcon 
                                            index={params.row.id}
                                            onClick = {() => {
                                                setLabel(params.row.employee_status == 'ACTIVE' ? 'Set as Inactive' : 'Set as Active')
                                            }}
                                        />
                                    </>
                                }
                                menu = {
                                    userMenu(params)
                                }
                            />
                        </div>
                    </div>
                )
            }
        }
    ]

    const [label, setLabel] = useState('');

    useEffect(() => {
        showUsers()
    },[])

    return (
        <>
            <Table
                rows={json}
                columns={columns}
                // loading={loadingState}
                onError={() => {

                }}
                sx={{
                    minHeight: '100%',
                    zIndex: '10',
                    // color: '#777',
                    fontSize: '12px',
                    fontFamily: `${RootCss.fonts.mainFont}`,
                }}
            />
            <UsersManageForm
                open={openManageUser}
                handleClose={handleCloseManageUser}
                showUsers={showUsers}
                params={params}
            />
        </>
    )
}

export default UsersTable
