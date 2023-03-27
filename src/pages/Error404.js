import React from 'react'
import { Link } from 'react-router-dom'


const Error404 = () => {
  return (
    <div className="wrapper">
      <h2 className="">Oops ! Page not found.</h2>
      <img src={require('../assets/images/404.png')} alt="" />
      <h4 className="">We Can't find the page you're looking for.</h4>
      <Link to="/" className="kf-bts">
        <span>GO BACK HOME</span>
      </Link>
    </div>
  )
}

export default Error404
