import React from 'react'
import logo from './logo.svg';
import './App.css'
import './modules/about_me/components/navbar/navbar'
import {Navbar} from "./modules/about_me/components/navbar/navbar";


function App() {
  return (
    <div className="App bg-black h-screen">
      <Navbar/>
    </div>
  );
}

export default App;
