import React from 'react';
import Appbar from './components/appbar/Appbar';
import Todos from './components/todos/Todos';


function App() {
  return (
    <div className="App">
      <Appbar/>
      <Todos/>
    </div>
  );
}

export default App;
