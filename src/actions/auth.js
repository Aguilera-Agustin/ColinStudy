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
            db.collection("usuarios").doc(res.user.email).get().then((eachUser)=>{
               if(eachUser.exists){
                    if(eachUser.data().name){
                        console.log("El usuario ya está creado")
                        dispatch(login(eachUser.data()))
                    }
                    else{
                        const user={
                            ...eachUser.data(),
                            email: res.user.email,
                            banner: "https://picsum.photos/1300/200",
                            name: res.user.displayName,
                            picture: res.user.photoURL,
                            profesor: false,
                            uid: res.user.uid
                        }
                        db.collection("usuarios").doc(res.user.email).set(user)
                        .then(success=>{
                            dispatch(login(user))
                        })
                        .catch(registerError=>{
                            dispatch(setError(registerError))
                        })
                    }
                }
                else{
                    dispatch(setError("El usuario no existe"))
                }
                dispatch(endLoading())

                
            }) 
        })
        .catch((err)=>{
            dispatch(setError(err.message))
        })
    }

}

