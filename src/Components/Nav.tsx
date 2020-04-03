import React, { FunctionComponent } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
  faBars
)

const Nav: FunctionComponent = () => {

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    const menu = document.getElementById('dropdowns');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  }

  return (
    <nav className="navigation container">
      <div className="navigation-desktop">
        <ul className="navigation-list">
          <li>
            <a href="/">
              <span className="sr-only">Link to Homepage</span>
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
            <a href="/">Login</a>
          </li>
          <li>
            <button className="btn-rounded">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
      <div className="navigation-mobile" role="menu">
        <div className="nav-menu-bar">
          <a href="/">
            <span className="sr-only">Link to Homepage</span>
            <Logo />
          </a>
          <FontAwesomeIcon
            className="menu-icon"
            icon={faBars}
            onClick={handleClick}
            size="2x"
          />
        </div>
        <div className="hidden" id="dropdowns">
          <ul className="mobile-navigation-list">
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
          <ul className="mobile-login">
            <li className="nav">
              <a href="login">Login</a>
            </li>
            <li>
              <button className="btn-rounded">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;