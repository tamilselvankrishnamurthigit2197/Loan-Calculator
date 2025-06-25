import React from 'react'
import Home from './components/Home'
import Exchange from './components/Exchange'
import About from './components/About'
import Error from './components/ErrorPage'

const App = () => {
  return (
    <>
    <div className='Lcontainer'>

      {/* header: name of the app */}
      <div className='Lheader'>
        <h3> Loan Calculator</h3>
      </div>

      {/* the components */}
      <div className='components'>
        <Home />
        <Exchange />
        <About />
        <Error />
      </div>

    </div>
    </>
  )
}

export default App