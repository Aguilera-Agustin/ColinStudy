import { makeStyles, Typography, Button, Grid, Hidden } from '@material-ui/core'
import React from 'react'
import cardData from '../../../data/mainCardsData'
import {InfoCard} from './InfoCard'

const useStyles = makeStyles((theme)=>({
    mainContainer:{
        [theme.breakpoints.only('xs')]:{
            marginTop:'25vh'
        }
    },
    primaryText: {
        padding: '7vw 0 0 '
    },
    primaryButton:{
        textAlign:'center',
        marginTop:'4vw'
    },
    cards:{
        marginTop:'5rem'
    }
})) 

const data = cardData

export const LoginPage = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.mainContainer}>
                <Typography className={classes.primaryText} variant="h3" color="textPrimary" component="h2" align="center">Colins</Typography>
                <Typography style={{marginTop:'10px'}} variant="subtitle2" align="center" color="textSecondary">Sitio gratuito de enseñanza para desarrolladores.</Typography>
                <Typography style={{marginTop:'3px'}} variant="subtitle2" align="center" color="textSecondary">Creá,compartí,aprendé y ayudá.</Typography>
                <div className={classes.primaryButton}>
                    <Button variant="contained" style={{width:'10rem'}} color="primary">
                    COMENZAR
                    </Button>
                </div>
            </div>
            <Hidden only="xs">
                <Grid container justify="space-around" className={classes.cards}>
                    {data.map(eachData => (
                        <Grid item key={eachData.title} md={3} xs={12} style={{margin:'30px'}}>
                            <InfoCard key={eachData.title} data={eachData}/>
                        </Grid>
                        ))}
                </Grid>
            </Hidden>
        </>
    )
}
