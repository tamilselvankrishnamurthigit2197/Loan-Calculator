// ThemeCurrencyContext.jsx
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useContext, useMemo, useState } from "react";

const ThemeCurrencyContext = createContext();
export const useThemeCurrency = () => useContext(ThemeCurrencyContext);

export const ThemeCurrencyContextProvider = ({ children }) => {
  // Theme state
  const [mode, setMode] = useState("light");
  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode },
      }),
    [mode]
  );

  // Currency state
  const [currency, setCurrency] = useState("USD");

  const value = useMemo(()=>({
    mode,
    toggleTheme,
    currency,
    setCurrency,
  }),[mode, toggleTheme, currency])

  return (
    <ThemeCurrencyContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeCurrencyContext.Provider>
  );
};
