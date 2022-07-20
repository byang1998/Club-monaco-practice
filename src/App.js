import React, { useState } from 'react';
import './index.css';
import Carousel from "react-elastic-carousel";
import MyImage from './assets/imagebackground.jpg';
import Item from "./Item";
import homeclubmonaco from './assets/homeclubmonaco.jpeg';
import secondmonaco from './assets/secondmonaco.jpeg';
import thirdmonaco from './assets/thirdmonaco.jpeg';
import fourthmonaco from './assets/fourthmonaco.jpeg';
import fifthmonaco from './assets/fifthmonaco.jpeg';
import sixthmonaco from './assets/sixthmonaco.jpeg';


function App() {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
  ];

  return (

    
    <div className="App">
        <img src={MyImage} />
      <div className="cta">
        <div className="ctaHeader">
        <h1 className="headertag">Hello,</h1>
        <h1 className="headertag">&nbsp; &nbsp; &nbsp; New</h1>
        </div>
       <br></br><br></br><br></br><br></br>
       <div className="ctatext">
       <p classname="ptag" align="right" width="50%">Step into the season with coveted knits, <br></br>made-to-layer styles, and elevated looks made for hitting the town.</p>
       <br></br><br></br><br></br><br></br>
       <button>Shop Women's New Arrivals ►</button>
       <br></br>
       <button>Shop Men's New Arrivals ►</button>
       </div>
      </div>

      <div className="carousel">
       
        <Carousel breakPoints={breakPoints}>
          <Item> <img src={homeclubmonaco} />  </Item>
          <Item> <img src={secondmonaco} /> </Item>
          <Item> <img src={thirdmonaco} /> </Item>
          <Item> <img src={fourthmonaco} /> </Item>
          <Item> <img src={fifthmonaco} /></Item>
          <Item> <img src={sixthmonaco} /></Item>
        </Carousel>
      </div> 
    </div>
  );
}

export default App;
