import React, { Component } from 'react';
import style from './lineList.css';

import sheetsu from 'sheetsu-node';

// create a config file
var config = {
  address: '156bcc9dfa5b',
};

// Create new client
var client = sheetsu(config);

export default class LineList extends Component {
  constructor(){
    super();
    this.state = {
      lines: []
    };
  }

  componentDidMount(){
    console.log("COMPONENT MOUNTED")
    client.read({ search: { /*Line: "Astoria"*/} }).then(function(data) {
      console.log("DATA",data);
      this.setState({
        lines: data
      })
    }, function(err){
      console.log(err);
    });
  }

  render() {
    return (
      <div className={style.container}>
        <p>Pick your subway line to see the best restaurants that are closest to the subway!</p>
        <input></input><button>Search</button>
        <table>
          <td>Line</td>
          <td>Station</td>
        </table>
      </div>
    );
  }
}

LineList.propTypes = {};
