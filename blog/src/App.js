import React from 'react';
import BlogPost from './components/blogpost/BlogPosts';
import MyAppBar from './components/appbar/MyAppBar';
import MainArea from './components/mainarea/MainArea';

function App() {
  return (
    <div className="App">
      <MyAppBar/>
      <MainArea/>
      <BlogPost/>
    </div>
  );
}

export default App;
