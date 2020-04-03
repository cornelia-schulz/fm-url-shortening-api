import React, { FunctionComponent } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Facebook } from '../assets/icon-facebook.svg';
import { ReactComponent as Twitter } from '../assets/icon-twitter.svg';
import { ReactComponent as Pinterest } from '../assets/icon-pinterest.svg';
import { ReactComponent as Instagram } from '../assets/icon-instagram.svg';

const Footer:FunctionComponent = () => {
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
          <span className="sr-only">Link to Facebook</span>
          <Facebook className="social-icon" />
        </a>
        <a href="/">
          <span className="sr-only">Link to Twitter</span>
          <Twitter className="social-icon" />
        </a>
        <a href="/">
          <span className="sr-only">Link to Pinterest</span>
          <Pinterest className="social-icon" />
        </a>
       <a href="/">
         <span className="sr-only">Link to Instagram</span>
         <Instagram className="social-icon" />
       </a>
      </div>
    </footer>
  )
}

export default Footer;