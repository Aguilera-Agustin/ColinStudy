import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'


import { makeStyles } from '@material-ui/core'
import { Profile } from '../components/pages/HOME/Profile'

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
                <Route path="/usuario/perfil" exact component={ Profile }/>
                <Route path="/usuario/equipo" exact component={ Profile }/>
                <Route path="/profesores" exact component={ Profile }/>
                <Route path="/tarea/multiple-choice" exact component={ Profile }/>
                <Route path="/tarea/desafio-revision" exact component={ Profile }/>
                <Route path="/info/preguntas" exact component={ Profile }/>
                <Route path="/info/sugerencias" exact component={ Profile }/>
                <Redirect to="/usuario/perfil" />
            </Switch>
            </main>
        </div>
    )
}