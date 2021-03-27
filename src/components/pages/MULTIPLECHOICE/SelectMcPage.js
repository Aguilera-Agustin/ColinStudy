import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { Container, Divider, Typography } from '@material-ui/core';

const columns = [
    { field: 'progreso', headerName: 'HECHO', width: 110 , description:'Proceso en el que se encuentra la tarea', sortable:false},
    { field: 'fecha', headerName: 'FECHA INICIO', width: 155, description:'Fecha de creación de la tarea', sortable: false},
    { field: 'entrega', headerName: 'FECHA FINAL', width: 150, description:'Fecha de entrega de la tarea', sortable: false},
    { field: 'calificacion', headerName: 'CALIFICACION', width: 160, description:'Calificación de la tarea', sortable: false},
    { field: 'tipo', headerName: 'TIPO', width: 160, description:'Tipo de la tarea', sortable: false},

  ];
  
  const rows = [
    { id:0, fecha: '03/26/2021', progreso: 'NO', entrega: '03/26/2021', calificacion: '10', tipo: 'OBLIGATORIA'},
    { id:1, fecha: '04/26/2021', progreso: 'NO', entrega: '04/26/2021', calificacion: '10', tipo: 'OBLIGATORIA' },
    { id:2, fecha: '05/26/2021', progreso: 'SI', entrega: '05/26/2021', calificacion: '10', tipo: 'OPCIONAL'},
    { id:3, fecha: '06/26/2021', progreso: 'SI', entrega: '06/26/2021', calificacion: '10', tipo: 'OPCIONAL'},
    { id:4, fecha: '07/26/2021', progreso: 'NO', entrega: '07/26/2021', calificacion: '10', tipo: 'OBLIGATORIA' },
    { id:5, fecha: '08/26/2021', progreso: 'SI', entrega: '08/26/2021', calificacion: '10', tipo: 'OPCIONAL' },
    { id:6, fecha: '09/26/2021', progreso: 'NO', entrega: '08/26/2021', calificacion: '10', tipo: 'OBLIGATORIA' },
    { id:7, fecha: '10/26/2021', progreso: 'SI', entrega: '10/26/2021', calificacion: '10', tipo: 'OPCIONAL' },
    { id:8, fecha: '11/26/2021', progreso: 'NO', entrega: '11/26/2021', calificacion: '10', tipo: 'OPCIONAL' },
  ];


export const SelectMcPage = () => {
    return (
        <Container style={{margin:'1rem 0'}}>
        <Typography variant="h4">Multiple Choice</Typography>
        <Divider style={{margin:'1rem 0'}}/>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={6} disableSelectionOnClick={true}/>
            </div>
        </Container>
    )
}
