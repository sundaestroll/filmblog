import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Navigation from './Navigation';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Header />
        <Main /> <Navigation />
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
