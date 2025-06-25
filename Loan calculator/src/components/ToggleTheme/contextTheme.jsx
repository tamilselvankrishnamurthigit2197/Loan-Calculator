import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useContext, useMemo, useState } from "react";

const ColorModeContext = createContext({ toggleColorMode: ()=> {} });

export const useColorMode = () => useContext(ColorModeContext);


export const ThemeContextProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const colorMode = useMemo(()=>({
        toggleColorMode: () => setMode((prev)=> (prev === 'light' ? 'dark' : 'light')),
    }), []);

    const theme = useMemo(()=> createTheme({
        palette: {
            mode,
        },
    }), [mode]);


    return(
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
};