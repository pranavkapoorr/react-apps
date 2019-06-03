import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Introduction from './components/Introduction';

function App() {
  return (
    <div className="App">
      <Header/>
      <Introduction/>
      <Footer/>
    </div>
  );
}

export default App;
