import React from 'react';
import { ReactComponent as Logo } from '../logo.svg';

function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-logo">
        <Logo />
      </div>
      <div className="footer-links">
        <div className="footer-link-list-wrapper">
          <h4>Features</h4>
          <ul className="footer-link-list">
            <li><a href="/">Link Shortening</a></li>
            <li><a href="/">Branded Links</a></li>
            <li><a href="/">Analytics</a></li>
          </ul>
        </div>
        <div className="footer-link-list-wrapper">
          <h4>Resources</h4>
          <ul className="footer-link-list">
            <li><a href="/">Blog</a></li>
            <li><a href="/">Developers</a></li>
            <li><a href="/">Support</a></li>
          </ul>
        </div>
        <div className="footer-link-list-wrapper">
          <h4>Company</h4>
          <ul className="footer-link-list">
            <li><a href="/">About</a></li>
            <li><a href="/">Our Team</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <a href="/">
          <img alt="facebook" src="/images/icon-facebook.svg" />
        </a>
        <a href="/">
          <img alt="twitter" src="/images/icon-twitter.svg" />
        </a>
        <a href="/">
          <img alt="pinterest" src="/images/icon-pinterest.svg" />
        </a>
       <a href="/">
         <img alt="instagram" src="/images/icon-instagram.svg" />
       </a>
      </div>
    </footer>
  )
}

export default Footer;