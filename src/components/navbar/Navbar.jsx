import React, {useState} from 'react'
  // a useState hook...
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css'
 
import logo from '../../assets/logo.svg';

import logo2 from '../../assets/images/logo/journi-logo.svg'
import { GoogSignin } from '..';


const Menu = () => (
          <>
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is miJourni?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </>
)


/*
const render = ()=> {
 
//const refConst = useRef("googleLoginBtn");
  return ( 
  <button className="loginBtn loginBtn--google"  >
    Login with Google
</button>
  );
}

const googleSDK= ()=> {
 
  window['googleSDKLoaded'] = () => {
    window['gapi'].load('auth2', () => {
      this.auth2 = window['gapi'].auth2.init({
        client_id: '885577069702-2hoi8oalnjqvmehsnponpk291gdei9km.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.prepareLoginButton();
    });
  }
 
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'google-jssdk'));
 
}

const componentDidMount = ()=> {
  this.googleSDK();
  console.log('sfsfd');
}

const prepareLoginButton = () => {
 
console.log(this.refs.googleLoginBtn);

this.auth2.attachClickHandler(this.refs.googleLoginBtn, {},
  (googleUser) => {

  let profile = googleUser.getBasicProfile();
  console.log('Token || ' + googleUser.getAuthResponse().id_token);
  console.log('ID: ' + profile.getId());
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
  //YOUR CODE HERE


  }, (error) => {
      alert(JSON.stringify(error, undefined, 2));
  });

}

*/

const Navbar = () => {
    // variable for if showing menu or not + function to change it
  const [toggleMenu,setToggleMenu] = useState(false);
  return (
    <div className ="gpt3__navbar">
      <div className="gpt3__navbar-links">
          {/* 
          <div className="gpt3__navbar-links_logo">
        
              <img src={logo2} alt="logo"/>
          </div>
        */}


          <div className="gpt3__navbar-links_container">



             <Menu />




        </div>
        
      </div>
      

        <div className="gpt3__navbar-sign"> 

         
            <GoogSignin />

            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
         

        <div className="gpt3__navbar-menu">
          {toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
            {toggleMenu && (
              <div className="gpt3__navbar-menu_container scale-up-center">
                <div className="gpt3__navbar-menu_container-links">
                  <Menu />
                </div>
                <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                  <button type="button">Sign up</button>
                </div>
              </div>
            )}
          </div>


        
    </div>
  ) /*

  //  885577069702-2hoi8oalnjqvmehsnponpk291gdei9km.apps.googleusercontent.com


  */  
}


export default Navbar

/*

import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">


          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>


      </div>



      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>



      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
*/