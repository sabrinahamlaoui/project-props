import React from 'react';
import './App.css';
import Profile from './Profile/Profile';
import image from './image.jpg'

function App() {
  return (
    <div className="App">
      <Profile  Bio="welcome to my profile" Alert={()=> alert("Hi Elisabeth")} Profession="engineer" >
      {image}
      </Profile>
    </div>
  );
}


export default App;
