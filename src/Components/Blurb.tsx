import React, { FunctionComponent } from 'react';

const Blurb:FunctionComponent = () => {
  return (
    <div className="blurb container">
      <div className="blurb-wrapper">
        <h1>More than just shorter links</h1>
        <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
        <button className="btn-rounded">Get started</button>
      </div>
      <div className="picture-wrapper">
        <img
          alt="person working"
          src="/images/illustration-working.svg"
        />
      </div>
    </div>
  )
}

export default Blurb;