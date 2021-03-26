import { Avatar, Container, Hidden, makeStyles, Typography, Button } from '@material-ui/core'
import React from 'react'
import {UserInfo} from './UserInfo'

const img = 'https://source.unsplash.com/random'

const useStyles = makeStyles((theme)=>({
    mainImg: {
        background: `url(${img})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        width: '100%',
        height: '13vw',
        display:'flex',
        marginTop:'1rem',
        alignItems:'flex-end',
        justifyContent:'center'
    },
    mainAvatar:{
        transform: 'translate(0, 50%)',
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    
    buttonContainer:{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        marginTop:'3rem'
    }
}))

export const Profile = () => {
    const classes = useStyles()
    return (
        <Container>
            <div className={classes.mainImg}>
                <Avatar className={classes.mainAvatar}>A</Avatar>
            </div>
            <Typography variant='h6' style={{marginTop:'3rem'}} align='center'>Agustín Aguilera</Typography>
            <Typography variant='subtitle2' color="textSecondary" align='center'>Beta Tester</Typography>
            <Hidden only="xs">
                <UserInfo/>
            </Hidden>
            <div className={classes.buttonContainer}>
                <Button variant="contained" color="primary" >
                Ver mis notas
                </Button>
            </div>
        </Container>
    )
}
