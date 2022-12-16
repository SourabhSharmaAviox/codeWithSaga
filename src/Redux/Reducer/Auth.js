import { Actions } from "../Actions/ActionTypes";

const initialState ={
    isAuth :null,
    userName :null
}

const AuthReducer = (state=initialState,action)=>{
    
    switch (action.type) {
        case "AUTH_SAVE":
            return {
                isAuth :action.payload.token,
                userName:action.payload.username
            }    
        
        case "AUTH_REMOVE":
            return{
                isAuth:null,
                userName:null
            }
        default:
            return state
    }
}

export default AuthReducer;