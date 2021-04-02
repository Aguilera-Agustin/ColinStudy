import { types } from "../types/types"
import {firebase, db} from '../firebase/firebaseConfig'


export const startLoading = ()=>({
    type: types.startLoading
})

export const endLoading = () =>({
    type: types.endLoading
})

export const login = (user) =>({
    type: types.loginUser,
    payload: {user}
})

export const setError = (err) =>({
    type: types.loginError,
    payload:{message:err}
})

export const startGoogleLogin = () => {
    return (dispatch)=>{
        dispatch(startLoading())
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
        .then((res)=>{
            const user = {
                uid: res.user.uid,
                email: res.user.email,
                name:res.user.displayName,
                picture:res.user.photoURL,

            }
            db.collection("cursos").doc("estructuras").set(user)
            dispatch(endLoading())
            dispatch(login(user))
        })
        .catch((err)=>{
            dispatch(setError(err.message))
        })
    }
}