import React, { Component } from 'react';
import './App.css';
import LineList from './components/lineList/lineList.jsx';

class App extends Component {
  componentDidMount(){

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Line Dine</h2>
        </div>
        <div>
          <LineList />
        </div>
      </div>
    );
  }
}

export default App;
