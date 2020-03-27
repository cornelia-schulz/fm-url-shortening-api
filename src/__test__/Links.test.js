import React from 'react';
import ReactDOM from 'react-dom';
import Links from '../Components/Links';
import { render } from '@testing-library/react';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Links></Links>, div);
  ReactDOM.unmountComponentAtNode(div);
})

it("renders Links correctly", () => {
  render(<Links></Links>);
})