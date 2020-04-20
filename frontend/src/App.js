import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { MainPage } from './components/main_page.js';



class App extends Component {

  render() {
    return (
    <div className="App">
        <MainPage/>
    </div>
    );
  }
}

export default App;
