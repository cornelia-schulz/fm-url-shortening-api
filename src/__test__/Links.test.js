import React from 'react';
import ReactDOM from 'react-dom';
import Links from '../Components/Links';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Links></Links>, div);
})