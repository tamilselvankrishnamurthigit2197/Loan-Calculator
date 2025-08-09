import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const ErrorPage = () => {
  return (
    <> 
      <h1>Something went wrong in the application.</h1>
      <Link to="/"> <Button> Go To Home</Button></Link>
    </>
  )
}

export default ErrorPage