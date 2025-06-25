import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContextProvider } from './components/ToggleTheme/contextTheme.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
    </BrowserRouter>
)
