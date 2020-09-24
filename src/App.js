import React from 'react';
import './App.css';
import Navbar from'./Components/Header/navbar.component';
import Post from'./Components/Post/post.component';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Post title="ceva"
            description="altceva"/>
       <Post title="post2"
            description="context2"/>
                 
    </div>
  );
}

export default App;
