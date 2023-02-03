// import React, { Component } from 'react'
import "./commonResource/css/bootstrap.css"
import "./commonResource/css/styles.css"
import {BrowserRouter,Route, Routes} from "react-router-dom"

import Header from "./commonResource/components/Header/Header";
import Section1 from "./commonResource/components/Section1/Section1";
import Section2 from "./commonResource/components/Section2/Section2";
import Section3 from "./commonResource/components/Section3/Section3";
import Section4 from "./commonResource/components/Section4/Section4";
import Section5 from "./commonResource/components/Section5/Section5";
import Footer from "./commonResource/components/Footer/Footer";

import React from 'react'
import YouTube from "./commonResource/components/YouTube/YouTube";
import Mac from "./pages/macPage/Mac";
import Iphone from "./pages/iphonePage/Iphone";


function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Routes> 

        <Route path="/" element = {<div> <Section1/><Section2/><Section3/> <Section4/><Section5/></div>}/>
        <Route path="/mac/" element = {<Mac/>}/>
        <Route path="/iphone/" element = {<Iphone/>}/>
        
      </Routes>
      <YouTube/>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App























