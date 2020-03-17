import React from 'react';

function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-logo">
        <img alt="logo" src="/images/logo.svg" />
      </div>
      <div className="footer-links">
        <div className="footer-link-list-wrapper">
          <h3>Features</h3>
          <ul className="footer-link-list">
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className="footer-link-list-wrapper">
          <h3>Resources</h3>
          <ul className="footer-link-list">
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className="footer-link-list-wrapper">
          <h3>Company</h3>
          <ul className="footer-link-list">
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <img alt="facebook" src="/images/icon-facebook.svg" />
        <img alt="twitter" src="/images/icon-twitter.svg" />
        <img alt="pinterest" src="/images/icon-pinterest.svg" />
        <img alt="instagram" src="/images/icon-instagram.svg" />
      </div>
    </footer>
  )
}

export default Footer;