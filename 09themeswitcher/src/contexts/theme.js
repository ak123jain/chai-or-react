import { createContext , useContext } from "react";


export const themecontext = createContext({
    themeMode : "ligth",
    darkTheme: () => {},
    LightTheme: () => {},
})




export const ThemeProvider =  themecontext.Provider

export default function useTheme() {
    return useContext(themecontext)
}






