import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import {SelectMcPage} from '../components/pages/MULTIPLECHOICE/SelectMcPage'
import {ProfilePage} from '../components/pages/HOME/ProfilePage'
import { MultipleChoicePage } from '../components/pages/MULTIPLECHOICE/MultipleChoicePage'
import { SelectTaskPage } from '../components/pages/TASKS/SelectTaskPage'
import { ChallangePage } from '../components/pages/TASKS/ChallangePage'


const drawerWidth = 250
const useStyles = makeStyles((theme)=>({
    content: {
        padding: theme.spacing(1, 3),
    },
    root: {
        [theme.breakpoints.up("sm")]: { paddingLeft: drawerWidth },
      },
      toolbar: theme.mixins.toolbar,
}))


export const DashboardRouter = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            
            <main className={classes.content}>
            <Switch>
                <Route path="/usuario/perfil" exact component={ ProfilePage }/>
                <Route path="/usuario/equipo" exact component={ ProfilePage }/>
                <Route path="/profesores" exact component={ ProfilePage }/>
                <Route path="/tarea/multiple-choice" exact component={ MultipleChoicePage }/>
                <Route path="/tarea/desafio-revision" exact component={ ChallangePage }/>
                <Route path="/info/preguntas" exact component={ ProfilePage }/>
                <Route path="/info/sugerencias" exact component={ ProfilePage }/>
                <Redirect to="/usuario/perfil" />
            </Switch>
            </main>
        </div>
    )
}