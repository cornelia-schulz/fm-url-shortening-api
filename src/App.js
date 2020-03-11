import React from 'react';
import './styles/reset.css';
import './App.css';
import Nav from './Components/Nav';
import Blurb from './Components/Blurb';
import Search from './Components/Search';
import Statistics from './Components/Statistics';
import Links from './Components/Links';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Blurb />
      <Search />
      <Statistics />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
