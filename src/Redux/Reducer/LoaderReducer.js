
const initialState={
    loading:false
}

const LoaderRedcuer = (state= initialState, action)=>{

    switch (action.type) {
        case "START_LOADER":
              return{
                loading:true
              }
        
            case "STOP_LOADER":
            return{
                loading:false
            }      
    
        default:
            return state
    }
}

export default LoaderRedcuer