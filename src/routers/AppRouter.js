import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
  } from "react-router-dom";

import { DashboardRouter } from './DashboardRouter';
import { NavDrawer } from '../components/navigation/NavDrawer'
import { makeStyles } from '@material-ui/core';
import { LoginPage } from '../components/pages/LOGIN/LoginPage';
import { useSelector } from 'react-redux'

const drawerWidth = 250

const useStyles = makeStyles((theme)=>({
    root: {
        [theme.breakpoints.up("sm")]: { paddingLeft: drawerWidth }
      },
}))  

export const AppRouter = () => {

    const authenticated = useSelector(state=> state.auth.authenticated)
    const classes = useStyles()
    return (
        <Router>
            <div>
                {authenticated? ( 
                    <>
                    <NavDrawer className={classes.root}/>
                    <Switch>
                        <Route path="/" component={ DashboardRouter }/>
                    </Switch>
                    </>
                    )
                    :(
                        <Switch>
                            <Route path="/login" exact component={ LoginPage }/>
                            <Redirect to="/login" />
                        </Switch>
                    ) 
                }
             
               
            </div>
        </Router>
    )
}