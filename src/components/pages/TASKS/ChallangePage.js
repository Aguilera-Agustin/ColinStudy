import React from 'react'
import { Button, Container, Divider, makeStyles, Paper, Typography } from '@material-ui/core'
import { TaskInfo } from './TaskInfo'
import { Challenge } from './Challenge'

const useStyles = makeStyles({
    mainPaper:{
        padding:'1rem 2rem',
        margin:'1rem 0'
    },
    divider:{
        margin:'0.5rem 0'
    },
    downButton:{
        margin:'1rem 0',
        width:'100%',
        display:'flex',
        justifyContent:'center',
    },
})


export const ChallangePage = () => {
    const classes = useStyles()
    return (
        <Container style={{margin:'1rem 0'}}>
            <TaskInfo/>
            <Paper className={classes.mainPaper}>
                <Typography variant="h6">Consigna</Typography>
                <Divider className={classes.divider}/>
                <Challenge/>
        <div className={classes.downButton}>
            <Button variant="contained" color="primary">Ver revisiones</Button>
        </div>

            </Paper>
        </Container>
    )
}
