import React from 'react'
import logo from './logo.svg';
import './App.css'
import './modules/about_me/components/navbar/navbar'
import {Navbar} from "./modules/about_me/components/navbar/navbar";


function App() {
  return (
    <div className="App bg-black h-screen font-cascadia-code">
      <Navbar/>
        <h1 className="text-2xl text-white">JEFFERSON TUFFOUR</h1>
        <p className="text-white">
            Full-Stack Developer
        </p>
    </div>
  );
}

export default App;
