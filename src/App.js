import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/reset.css';
import './App.scss';
import Nav from './Components/Nav';
import Blurb from './Components/Blurb';
import Statistics from './Components/Statistics';
import Links from './Components/Links';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' render={() => <Nav />} />
        <Route path='/' render={() => <Blurb />} />
        <Route path='/' render={() => <Statistics />} />
        <Route path='/' render={() => <Links />} />
        <Route path='/' render={() => <Footer />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
