import { Button, Container, Divider, FormControl, FormControlLabel, makeStyles, Paper, Radio, RadioGroup, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    form:{
        marginTop:'1rem',
        width:'60vw',
        [theme.breakpoints.down("md")] :{
            width:'100vw'
        }
    },
    container:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    divider:{
        margin:'0.6rem 0'
    },
    slogan:{
        padding:'0 0.5rem '
    },
    button:{
        width:'25%',
        justifySelf:'flex-end'
    },
    buttonContainer:{
        display:'flex',
        justifyContent:'flex-end'
    }

}))

export const MultipleChoicePage = () => {
    const classes = useStyles()
    const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

    return (
        <Container className={classes.container}>
            <form className={classes.form}>
                <FormControl component={Paper} variant='outlined' style={{padding:'2rem'}}>
                    <Typography align='center' variant='h5'>Titulo de la pregunta</Typography>
                    <div className={classes.divider}/>
                    <Typography className={classes.slogan} variant='body2'>If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
    Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow)</Typography>
                    <Divider className={classes.divider}/>
                    <RadioGroup aria-label="task" name="tasks" value={value} onChange={handleChange}>
                        <FormControlLabel  value="op1" control={<Radio />} label="Female" />
                        <FormControlLabel  value="op2" control={<Radio />} label="Male" />
                        <FormControlLabel  value="op3" control={<Radio />} label="Other" />
                        <FormControlLabel  value="op4" control={<Radio />} label="Other" />
                    </RadioGroup>
                    <div className={classes.buttonContainer}>
                    <Button type='submit' className={classes.button} variant='contained' color='primary'>Enviar</Button>
                    </div>
                </FormControl>
            </form>
        </Container>
    )
}
