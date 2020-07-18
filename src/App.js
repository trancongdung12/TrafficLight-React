import React, { Component } from 'react';
import './App.css';
import TrafficLight from './components/TrafficLight';
const RED = 0;
const GREEN = 1;
const ORANGE = 2;
class App extends Component {
  constructor(){
    super();
    this.state = {
      currentColor: GREEN
    }
    setInterval(()=>{
      this.setState({
        currentColor: this.getColor(this.state.currentColor) 
      });
    },1000);
  }
  getColor(color){
    switch(color){
      case RED: return ORANGE ;
      case ORANGE: return GREEN ;
      default: return RED ;
    }
  }
  render(){
    // const {currentColer} = this.state.currentColer;
    return (
      <div className="App">
        <TrafficLight currentColor = {this.state.currentColor} />
      </div>
    );
  }
}

export default App;
