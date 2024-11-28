import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const Table = ({
    rows,
    columns,
    loading,
    sx,
    hideFooter,
    customPageSize,
    autoHeight,
    defaultPageSize,
    componentsProps
}) => {
    const [pageSize, setPageSize] = useState(defaultPageSize ? defaultPageSize : 100)
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            loading={loading}
            disableSelectionOnClick={true}
            pageSize={customPageSize ? customPageSize : pageSize}
            pagination
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[25,50,100]}
            sx={sx}
            autoHeight={autoHeight ? false : true}
            hideFooter={hideFooter}
            density='compact'
            disableColumnMenu
            componentsProps={componentsProps}
        />
    )
}

export default Table
