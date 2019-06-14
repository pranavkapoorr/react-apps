import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import About from './components/About';
import Timeline from './components/Timeline';
import Accounts from './components/Accounts';

function App() {
  return (
    <div className="App">
      <Header/>
      <Introduction/>
      <About/>
      <Timeline/>
      <Accounts/>
      <Footer/>
    </div>
  );
}

export default App;
