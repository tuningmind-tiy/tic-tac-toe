import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      player_x: 'x',
      player_o: 'o',
      player: 'x',
      board: [
        '', '', '', '', '', '', '', '', ''
      ]
    }
  }
  render() {
    return (
      <div className="board">
      {this.state.board.map((cell, index) => {
        return <div className="cell" key={index}>{cell}</div>
      })}
      </div>
    );
  }
}

export default App;
