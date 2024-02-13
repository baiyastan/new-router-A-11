import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/service">Service</Link>
      </li>
    </ul>
  </header>
  )
}

export default Header