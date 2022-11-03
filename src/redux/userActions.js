import {LOGIN, REGISTER,APPLYLOAN,CURRENTUSER} from './userActionTypes';

export const login=(data)=>{
    return {
        type: LOGIN,
        payload:data
    }
}

export const registerUser=(obj)=>{
    return {
        type: REGISTER,
        payload: obj
    }
}

export const applyLoan=(obj)=>{
    return {
        type: APPLYLOAN,
        payload: obj
    }
}

export const updateCurrentUser=(obj)=>{
    return {
        type: CURRENTUSER,
        payload: obj
    }
}