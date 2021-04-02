import {types} from '../types/types'

const initialState = {
    authenticated: false,
    error: null,
    loading: false
}

const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.loginUser:
            return {
                ...state,
                error:null,
                authenticated: true,
                user: action.payload.user
            }
        case types.startLoading:
            return {
                ...state,
                loading: true
            }    
        case types.endLoading:
            return {
                ...state,
                loading: false
            }    
        case types.logout:
            return { 
                authenticated: false
            }
        case types.loginError:
            return {
                ...state,
                loading:false,
                authenticated: false,
                error: action.payload.message
            }
        default:
            return state;
    }
}

export default authReducer