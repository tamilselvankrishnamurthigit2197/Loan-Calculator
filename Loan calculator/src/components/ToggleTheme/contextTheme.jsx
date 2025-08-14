// ThemeCurrencyContext.jsx
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useContext, useMemo, useState } from "react";

// exchange rates relative to USD
const exchangeRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 146.5,
  AUD: 1.52,
  CAD: 1.35,
  INR: 83.12
};

// currency symbols
const currencySymbols = {
  USD: "$",
  EUR: '€',
  GBP: "£",
  JPY: "¥",
  AUD: "A$",
  CAD: "C$",
  INR: "₹"
};

// Create Context
const ThemeCurrencyContext = createContext({
  toggleTheme: () => {},
  currency: "USD",
  setCurrency: () => {},
  rate: 1,
  symbol: "$",
});

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
    rate: exchangeRates[currency],
    symbol: currencySymbols[currency],
  }),[currency])

  return (
    <ThemeCurrencyContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeCurrencyContext.Provider>
  );
};
