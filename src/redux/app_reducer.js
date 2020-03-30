import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import {getAuthUserData, setAuthUserData} from './auth-reduser'

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const UNFOLLOW = 'UNFOLLOW';


let initialState = {
    initialized: false,
}
const appReducer = (state = initialState, action) => {

    switch (action.type){ 
        case INITIALIZED_SUCCESS: 
            return{
                ...state, 
                initialized: true 
            }

        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())

    promise.then(() => {
        dispatch(initializedSuccess())
    })
    
    dispatch(initializedSuccess())
}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
    .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        }
        else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: message}))
        } 
    });
}
export const logout = () => (dispatch) => {
    authAPI.logout()
    .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
}
export default appReducer;