import  { combineReducers } from  "redux"
import AuthReducer from "./Auth"
import LoaderRedcuer from "./LoaderReducer"
import PostReducer from "./PostReducer"


const rootReducer = combineReducers({
    Auth :AuthReducer,
    Post: PostReducer,
    Loader:LoaderRedcuer
})

export default rootReducer