
import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { MainNavBar, CTA, Brand, Navbar  } from './components';
import { About, Home } from './pages';


import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css';

const App = () => {
  return (
    <div className="App">
      


      <BrowserRouter>
        
      <div className="gradient__bg"> 
          <MainNavBar />
        </div>
        <Routes>
          {/* dashboard  */}
          <Route path="/" element={(<Home />)} />
          <Route path="/home" element={(<Home />)} />
          <Route path="/about" element={(<About />)} />


        </Routes>
      </BrowserRouter>







    </div>
  )
}

export default App