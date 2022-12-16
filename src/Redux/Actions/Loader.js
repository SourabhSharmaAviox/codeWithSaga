import { ActionsObject } from "./ActionTypes"


export const StartLoader=()=>{
    return {
        type:ActionsObject.START_LOADER
    }
}



export const StopLoader=()=>{
    return {
        type:ActionsObject.STOP_LOADER
    }
}