import React from 'react'
import './App.css'
import Navbar from "./modules/site/components/navbar/navbar"
import { FiMoreHorizontal } from "react-icons/fi"

// <div className={"rounded-md"} dangerouslySetInnerHTML={{ __html: pic }} />

function App() {
    return (
        <div className="App bg-black h-screen font-cascadia-code">
            <Navbar/>
            <main className="text-white container mx-auto px-16 xl:px-32 mt-28">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <div className="text-4xl text-left">
                            <p className="">Hi,</p>
                            <p className="pt-3">I am Jefferson Tuffour</p>
                            <p className="pt-3">Full-Stack Developer</p>
                            <p className="text-sm pt-7">
                                I've always been drawn to development, studying & teaching. I enjoy each aspect and love
                                building complex sites or apps from start to finish.
                            </p>
                            <p className="text-sm pt-7 text-gray-400">
                                I'm working at Amalitech, which helps continuously build and deploy web app.
                            </p>
                        </div>
                        <div className='text-center mt-10 text-gray-400 hover:text-white'>
                            <a href='/'>View more<FiMoreHorizontal className="mx-auto"/></a>

                        </div>
                    </div>
                    <div>
                        Blog
                    </div>
                </div>

            </main>
        </div>
    );
}

export default App;
