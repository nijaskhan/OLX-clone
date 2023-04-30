import {createContext, useState} from "react";

export const postContext = createContext(null);

export default function viewPost({children}){
    const [productDet, setProductDet] = useState();
    return (
        <postContext.Provider value={{productDet, setProductDet}}>
            {children}
        </postContext.Provider>
    )
}