import { createContext, useState } from "react";

export const Context = createContext();

export default function MainContext({children}) {
    const [language, setLanguage] = useState("English")
    return <Context.Provider value={{language, setLanguage}}>
        {children}
    </Context.Provider>
}