import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Product Research Supervisor</title>
        <meta property="og:title" content="Product Research Supervisor" />
      </Helmet>
    </div>
  )
}

export default Home
