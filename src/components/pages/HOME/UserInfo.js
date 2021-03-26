import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    score:{
        width: '100%',
        marginTop:'3em',
        display:'flex',
        justifyContent:'center'
    },
    eachScore:{
        display: 'flex',
        flexDirection:'column',
        margin: '0 40px'
    },
})

export const UserInfo = () => {
    const classes = useStyles()
    return (
        <div className={classes.score}>
            <div className={classes.eachScore}>
            <Typography variant='button' align='center'><b>100</b></Typography>
            <Typography variant='subtitle2' color="textSecondary" align='center'>Intervenciones</Typography>
            </div>
            <div className={classes.eachScore}>
            <Typography variant='button' align='center'><b>100</b></Typography>
            <Typography variant='subtitle2' color="textSecondary" align='center'>Reconocimientos</Typography>
            </div>
            <div className={classes.eachScore}>
            <Typography variant='button' align='center'><b>100</b></Typography>
            <Typography variant='subtitle2' color="textSecondary" align='center'>Buenos Amigos</Typography>
            </div>
        </div>
    )
}
