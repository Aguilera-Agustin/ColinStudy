import { Container, Divider, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    paper: {
        padding:'1rem'
    },
    divider:{
        margin: '0.5rem 0'
    },
    eachBox:{
        margin: '2rem 0'
    }
})

export const FaqsPage = () => {
    const classes = useStyles()
    return (
        <Container style={{marginTop:'1rem'}}>
            <Paper className={classes.paper}>
                <Typography  variant="h6" color="initial">Preguntas Frecuentes</Typography>
                <Divider className={classes.divider}/>
                <div className={classes.eachBox}>
                <Typography variant="button">
                    <b>
                ¿Cuál es mi  pregunta?
                    </b>
                </Typography>
                <Typography varint="body2">
                    uionasuiodnasuiodhnpñuiohdbnuiashnduiashbnuñashnuiñdhbnuioadnuiasdbnuñasnuiodhbnasñdbnuiodbnñuiasbnuidjbnas
                </Typography>
                </div>
                <div className={classes.eachBox}>
                <Typography variant="button">
                    <b>
                ¿Cuál es mi  pregunta?
                    </b>
                </Typography>
                <Typography varint="body2">
                    uionasuiodnasuiodhnpñuiohdbnuiashnduiashbnuñashnuiñdhbnuioadnuiasdbnuñasnuiodhbnasñdbnuiodbnñuiasbnuidjbnas
                </Typography>
                </div>
                <div className={classes.eachBox}>
                <Typography variant="button">
                    <b>
                ¿Cuál es mi  pregunta?
                    </b>
                </Typography>
                <Typography varint="body2">
                    uionasuiodnasuiodhnpñuiohdbnuiashnduiashbnuñashnuiñdhbnuioadnuiasdbnuñasnuiodhbnasñdbnuiodbnñuiasbnuidjbnas
                </Typography>
                </div>
                <div className={classes.eachBox}>
                <Typography variant="button">
                    <b>
                ¿Cuál es mi  pregunta?
                    </b>
                </Typography>
                <Typography varint="body2">
                    uionasuiodnasuiodhnpñuiohdbnuiashnduiashbnuñashnuiñdhbnuioadnuiasdbnuñasnuiodhbnasñdbnuiodbnñuiasbnuidjbnas
                </Typography>
                </div>
            </Paper>
        </Container>
    )
}
