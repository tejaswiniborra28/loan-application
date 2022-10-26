import {LOGIN, REGISTER} from './userActionTypes';

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