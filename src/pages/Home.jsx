import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from '../containers';
import { CTA, Brand, Navbar } from '../components';



const Home = () => {
  return (
    <div>
      
      <Navbar />
      <Header />
        <WhatGPT3 />
     {/*    <Brand /> <Features />
     //   <Possibility />
        <CTA />*/}
        <Blog />
        <Footer /> 

    </div>
  )
}

export default Home