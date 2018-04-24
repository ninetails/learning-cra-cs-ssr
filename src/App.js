import React, { Component } from 'react';
import Loadable from 'react-loadable';
import logo from './logo.svg';
import './App.css';

const AsyncComponent = Loadable({
  loader: () => import('./SomeComponent'),
  loading: () => <div>loading...</div>
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AsyncComponent />
      </div>
    );
  }
}

export default App;
