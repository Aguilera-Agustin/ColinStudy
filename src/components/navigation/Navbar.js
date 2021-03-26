import React from 'react'
import { AppBar, Button, Hidden, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from 'react-router-dom';


const useStyles =  makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        marginRight: "auto",
      },
}))


export const Navbar = ({setOpen}) => {
    const classes = useStyles()
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Hidden xsUp> 
                    <IconButton edge="start" className={classes.menuButton} onClick={() => setOpen(true)}  color="inherit"> 
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            <Typography variant="h5" className={classes.title}>
                Colins
            </Typography>
            </Toolbar>
        </AppBar>
    )
}