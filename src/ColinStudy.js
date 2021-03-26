import { CssBaseline } from '@material-ui/core'
import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './routers/AppRouter'
import { store } from './store/store'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './themeConfig'

export const ColinStudy = () => {
    return (
        <Provider store={store}>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <AppRouter/>
            </ThemeProvider>
        </Provider>
    )
}
