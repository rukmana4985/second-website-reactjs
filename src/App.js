import React, { Component } from 'react';
import './App.css';
import Main from './components/views/layouts/Main';
import Header from './components/views/layouts/Header';

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Main>
      </Main>
      </div>
    );
  }
}

export default App;
