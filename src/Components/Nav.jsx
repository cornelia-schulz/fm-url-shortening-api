import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';

function Nav() {
  return (
    <nav className="navigation container">
      <ul className="navigation-list">
        <li>
          <a href="/">
            <Logo />
          </a>
        </li>
        <li className="nav">
          <a href="/">Features</a>
        </li>
        <li className="nav">
          <a href="/">Pricing</a>
        </li>
        <li className="nav">
          <a href="/">Resources</a>
        </li>
      </ul>
      <ul className="login">
        <li className="nav">
          <a href="login">Login</a>
        </li>
        <li>
          <button className="btn-rounded">
            Sign Up
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;