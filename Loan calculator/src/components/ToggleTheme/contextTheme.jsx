/* useColorMode component and ThemeContextProvider to apply to the whole page */

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useContext, useMemo, useState } from "react";

const ThemeCurrencyContext = createContext({ toggleColorMode: ()=> {} });

export const useColorMode = () => useContext(ThemeCurrencyContext);

export const ThemeCurrencyContextProvider = ({ children }) => {
    
    const [mode, setMode] = useState('light');

    /* it changes only toggles the background theme without rendering the whole page */
    const colorMode = useMemo(()=>({

        toggleColorMode: () => setMode((prev)=> (prev === 'light' ? 'dark' : 'light')),

    }), []);

    /* once the colorMode updates or renders then it receives mode as light or dark */
    const theme = useMemo(()=> createTheme({
        palette: {
            mode
        },
    }), [mode]);

    /* currency  */
    const [currency, setCurrency] = useState("USD");

    const changeCurrency = (newCurrency) =>{
        setCurrency(newCurrency);
    }


    return(
        /* colorMode - toggles theme(mode, setMode) and theme - createTheme */
        <ThemeCurrencyContext.Provider value={{colorMode, currency, changeCurrency}}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeCurrencyContext.Provider>
    )
};