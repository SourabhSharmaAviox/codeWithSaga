import { useReducer } from "react";


const rdc = (state,action)=>{
    switch (action.type) {
        case "INC":
            return{
                count:state.count +1
            }
            
        default:
           return state;
    }
}

const Reducers = ()=>{
    
    const [currentVal, dispatchFn] = useReducer(rdc,{count:0});
    return<>
          {currentVal.count}
        <button onClick={()=>{
            dispatchFn( {type:"INC"})
            }}>Incremtn</button>
    </>
}

export default Reducers;