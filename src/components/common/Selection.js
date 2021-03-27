import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { Container, Divider, Typography } from '@material-ui/core';

export const Selection = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={6} disableSelectionOnClick={true}/>
        </div>
    )
}
