import React from 'react'
import {makeStyles, Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    infoPaper:{
        display:'flex',
        padding:'0.7rem 2rem',
        justifyContent:'space-between',
        width:'50%'
    },
    typography:{
        margin: '0.3rem 0'
    }
})

export const TaskInfo = () => {
    const classes = useStyles()

    return (
        <Paper  className={classes.infoPaper}>
                <div>
                    <Typography className={classes.typography}>Vencimiento: <b>28/03/2021</b></Typography>
                    <Typography className={classes.typography}>Estado: <b>Finalizado</b></Typography>
                    <Typography className={classes.typography}>Dificultad: <b>Finalizado</b></Typography>
                    <Typography className={classes.typography}>Opcional: <b>No</b></Typography>
                </div>
                <div>
                    <Typography className={classes.typography}>Revisiones esperadas: <b>3</b></Typography>
                    <Typography className={classes.typography}>Modalidad: <b>Individual</b></Typography>
                    <Typography className={classes.typography}>Lenguaje: <b>Java</b></Typography>
                    <Typography className={classes.typography}>Test: <b>Obligatorio</b></Typography>
                </div>
        </Paper>
    )
}
