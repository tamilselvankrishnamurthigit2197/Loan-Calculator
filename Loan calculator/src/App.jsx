
import Home from './components/Home'
import Exchange from './components/Exchange'
import About from './components/About'
import Error from './components/ErrorPage'
import { Route, Routes } from "react-router-dom"
import ToggleTheme from './components/ToggleTheme'

const App = () => {
  return (
    <div>
    <h2>Loan Calculator</h2>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exchange' element={<Exchange />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>

       {/* theme toggle */}
      <ToggleTheme />
    </div>
    
  )
}

export default App