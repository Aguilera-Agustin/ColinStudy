import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'


import { makeStyles } from '@material-ui/core'
import { HomePage } from '../components/pages/HOME/HomePage'

const drawerWidth = 250
const useStyles = makeStyles((theme)=>({
    content: {
        padding: theme.spacing(1, 3)
      },
      root: {
        [theme.breakpoints.up("sm")]: { paddingLeft: drawerWidth }
      },
      toolbar: theme.mixins.toolbar,
}))


export const DashboardRouter = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            
            <main className={classes.content}>
            <Switch>
                <Route path="/home" exact component={ HomePage }/>
                <Redirect to="/home" />
            </Switch>
            </main>
        </div>
    )
}