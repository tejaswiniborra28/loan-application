import { LOGIN, REGISTER } from "./userActionTypes";

const initialState={
    registeredUsers:[],
    users:[],
    validated:false
}
const UserReducer = (state =initialState, action) => {
    switch(action.type){
        case REGISTER: return {
                ...state,
                //RegisteredUser:true
                 users: [...state.users,action.payload],
                 registeredUsers:[...state.registeredUsers,action.payload.email]
               
            }
        case LOGIN:
            return {
                ...state,
                validated: state.users.filter(e=>e.email===action.payload.email && e.password===action.payload.password).length >0?true:false,
            }
        default:
            return state
    }
}

export default UserReducer;