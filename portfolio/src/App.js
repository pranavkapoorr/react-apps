import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import About from './components/About';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <Header/>
      <Introduction/>
      <About/>
      <Timeline/>
      <Footer/>
    </div>
  );
}

export default App;
