import React from 'react'
import './App.css'
import Navbar from "./modules/site/components/navbar/navbar"
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"
import Home from './modules/site/components/home/home';
import About from './modules/site/components/about/about';
import Footer from './modules/site/components/footer';

function App() {
    return (
        <div className="App bg-[#182533] font-cascadia-code">
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                </Routes>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
