import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />
        <img src={logo} className="App-logo" alt="logo" />
       </header>
    </div>
  );
}

export default App;
