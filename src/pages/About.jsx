import React from 'react'

import AlAbout from '../assets/Al_selfie.jpg';
import TennisNY from '../assets/TennisNy.jpg';
const About = () => {
  return (
    <div>
      {/* 
      <p> About author - Al </p>


      <br/>
      <p> This was created to test React and for fun! Under construction...  </p>

      <img src={possibilityImage} alt="possibility" />

*/}

{/*
<div className="gpt3__possibility section__padding" id="possibility"> 

*/}

<div className="gpt3__header section__padding" id="home">


        <div className="gpt3__possibility-image">

        
          <img src={AlAbout} alt="possibility" />
        </div>


        <div className="gpt3__possibility-content">
          <h4> About author - Al</h4>
          <h1 className="gradient__text">
            Cool
          <br /> Stuff
          </h1>
          <p> This was created to test React and for fun! Under construction...</p>
          <h4>................</h4>
        </div>
        <div className="gpt3__possibility-image">
          <img src={TennisNY} alt="TennisNY" />
        </div>



        <div className="gpt3__possibility-content">
          <h4> Tennis in New York </h4>
          <h1 className="gradient__text">
            Cool
          <br /> Stuff
          </h1>
          <p> This photo was taken from tennis match in US Open in 2022. Excellent photo quality</p>
          <h4>................</h4>
        </div>
      </div>


        
    </div>



  )
}

export default About