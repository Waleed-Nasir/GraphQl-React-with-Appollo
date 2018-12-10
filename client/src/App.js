import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListComponent from './Component/ItemList';
import CreateList from './Component/createList';



class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>React-Appollo</h2>
       <ListComponent/>
       <CreateList/>
      </div>
    );
  }
}

export default App;
