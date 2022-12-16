import { createContext, useState } from "react";


export const ColorContext = createContext();

const ColorContextProvider = ({children})=>{

    const [color,setColor] = useState(false)
    return <ColorContext.Provider value={{color,setColor}}>
        {children}
    </ColorContext.Provider>
}

export default ColorContextProvider