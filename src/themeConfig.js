import { deepPurple } from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette:{
        primary: deepPurple
    },
    overrides: {
        MuiFormControlLabel:{
            label:{
                fontSize:'0.9rem'
            },
            
        }
    }
})

export default theme;