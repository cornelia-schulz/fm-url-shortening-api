import React from 'react';
import Search from './Search';

function Statistics() {
  return (
    <div className="statistics container">
      <Search />
      <div className="statistics-wrapper">
        <div className="blue-divider"></div>
        <div className="statistics-intro">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced statistics dashboard.
          </p>
        </div>
        <div className="selling-points">
          <div className="selling-point">
            <div className="statistics-icon-container">
              <img src="/images/icon-brand-recognition.svg" alt="brand recognition" />
            </div>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.
            </p>
          </div>
          <div className="selling-point">
            <div className="statistics-icon-container">
              <img src="/images/icon-detailed-records.svg" alt="detailed records" />
            </div>
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and where people engage with  your content helps inform better decisions.
            </p>
          </div>
          <div className="selling-point">
            <div className="statistics-icon-container">
              <img src="/images/icon-fully-customizable.svg" alt="fully customisable" />
            </div>
            <h3>Fully Customisable</h3>
            <p>
              Improve brand awareness and content discoverability through customisable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Statistics;