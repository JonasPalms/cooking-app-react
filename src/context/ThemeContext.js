import { createContext } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

    return (
        <ThemeContext.Provider value={{ color: 'blue' }}>
            {children}
        </ThemeContext.Provider>
    )
}