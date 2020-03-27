import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../Components/Nav';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Nav></Nav>, div);
  ReactDOM.unmountComponentAtNode(div);
})