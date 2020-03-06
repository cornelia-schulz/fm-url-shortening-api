import React from 'react';

function Nav() {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <a href="#">Shortly</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
      </ul>
      <ul className="login">
        <li>
          <a href="login">Login</a>
        </li>
        <li>
          <a href="signup">Sign Up</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;