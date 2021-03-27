import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { Container, Divider, Typography } from '@material-ui/core';



const columns = [
    { field: 'done', headerName: 'HECHO', width: 110 , description:'Proceso en el que se encuentra la tarea', sortable:false},
    { field: 'initialDate', headerName: 'FECHA INICIO', width: 155, description:'Fecha de creación de la tarea', sortable: false},
    { field: 'endDate', headerName: 'FECHA FINAL', width: 150, description:'Fecha de entrega de la tarea', sortable: false},
    { field: 'score', headerName: 'CALIFICACION', width: 160, description:'Calificación de la tarea', sortable: false},
    { field: 'type', headerName: 'TIPO', width: 160, description:'Tipo de la tarea', sortable: false},
    { field: 'revisions', headerName: 'REVISIONES', width: 160, description:'Revisiones realizadas', sortable: false},

  ];
  
  const rows = [
    { id:0, initialDate: '03/26/2021', done: 'NO', endDate: '03/26/2021', score: '10', type: 'OBLIGATORIA', revisions:'5 de 5'},
    { id:1, initialDate: '04/26/2021', done: 'NO', endDate: '04/26/2021', score: '10', type: 'OBLIGATORIA', revisions:'5 de 5' },
    { id:2, initialDate: '05/26/2021', done: 'SI', endDate: '05/26/2021', score: '10', type: 'OPCIONAL', revisions:'5 de 5'},
    { id:3, initialDate: '06/26/2021', done: 'SI', endDate: '06/26/2021', score: '10', type: 'OPCIONAL', revisions:'5 de 5'},
    { id:4, initialDate: '07/26/2021', done: 'NO', endDate: '07/26/2021', score: '10', type: 'OBLIGATORIA', revisions:'5 de 5' },
    { id:5, initialDate: '08/26/2021', done: 'SI', endDate: '08/26/2021', score: '10', type: 'OPCIONAL', revisions:'5 de 5' },
    { id:6, initialDate: '09/26/2021', done: 'NO', endDate: '08/26/2021', score: '10', type: 'OBLIGATORIA', revisions:'5 de 5' },
    { id:7, initialDate: '10/26/2021', done: 'SI', endDate: '10/26/2021', score: '10', type: 'OPCIONAL', revisions:'5 de 5' },
    { id:8, initialDate: '11/26/2021', done: 'NO', endDate: '11/26/2021', score: '10', type: 'OPCIONAL', revisions:'5 de 5' },
  ];

export const SelectTaskPage = () => {
    return (
        <Container style={{margin:'1rem 0'}}>
        <Typography variant="h4">Desafios de Revisión</Typography>
        <Divider style={{margin:'1rem 0'}}/>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={6} disableSelectionOnClick={true}/>
            </div>
        </Container>
    )
}
