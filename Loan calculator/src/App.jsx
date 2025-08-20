import Header from "./components/AppBar"
import { Route1 } from "./Route"

const App = () => {
  return (
    <>
    <Header />
    
    {/* which containes layout to the pages (re render)  */}
    <Route1 />
    </>
  )
}

export default App