import React from 'react'
import './Header.css'
import logo from '../../logo.svg';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="App-header">
        <Link to="/" >
        <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <p>TODO</p>
    </header>
  )
}

export default Header
