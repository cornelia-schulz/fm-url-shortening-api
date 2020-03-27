import React from 'react';
import ReactDOM from 'react-dom';
import Statistics from '../Components/Statistics';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Statistics></Statistics>, div);
  ReactDOM.unmountComponentAtNode(div);
})