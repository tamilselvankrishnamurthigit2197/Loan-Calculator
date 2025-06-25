import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home'

const Error = () => {
  return (
    <div>
      <h1>Something went wrong in the application.</h1>
      <Link to={<Home />}> Go Home</Link>
    </div>
  )
}

export default Error