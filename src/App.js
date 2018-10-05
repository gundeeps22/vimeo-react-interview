import React, { Component } from 'react';
import logo from './logo.svg';
import TopComponent from './Components/topComponent.js';
import BottomComponent from './Components/bottomComponent.js';
import LowestComponent from './Components/lowestComponent.js';
import CarouselComponent from './Components/carouselComponent.js'
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <div className="upperDiv">
                <TopComponent className="topComponent" />

            </div>

            <div className="lowerDiv">
                <BottomComponent />
            </div>

            <div className="lowestDiv">
                <LowestComponent />
            </div>

            <div className="carousel">
                <CarouselComponent />
            </div>

        </div>

    );
  }
}

export default App;
