import React from 'react';
import ReactDOM from 'react-dom';
import Blurb from '../Components/Blurb';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Blurb></Blurb>, div);
  ReactDOM.unmountComponentAtNode(div);
})