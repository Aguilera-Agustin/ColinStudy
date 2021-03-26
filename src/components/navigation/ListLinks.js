import React from 'react'

import { Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import routes from '../../data/navbarRoutes';

const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar

}))

export const ListLinks = ({setOpen}) => {
    const classes = useStyles()
    const setDivider = (index) =>{
        if(index===2 || index === 4){
            return <Divider/>
        }
        else{
            return false
        }
    }
    return (
        <>
            <div className={classes.toolbar} style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                <Typography variant="button" color="initial">
                  @Username  
                </Typography>
                <Typography variant="caption" color="initial">
                  Team
                </Typography>
            </div>
            <Divider />
            <List disablePadding className={classes.drawer}>
          
                    {routes.map((item, index)=>(
                        <React.Fragment key={item.route}>
                        <ListItem button component={Link} to={item.route}  onClick={() => setOpen(false)}>
                            <ListItemText primary={item.title} />
                        </ListItem>
                        {setDivider(index)}
                        </React.Fragment>
                        
                    ))}
             
                <Divider/>
                <ListItem button key={"logoutButton"}>
                    <ListItemText primary={"Logout"} />
                </ListItem>
            </List>
        </>
    )
}