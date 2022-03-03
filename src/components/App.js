import React from 'react';

import Navbar from "./Navbar";
import Main from "./Main";
import Css from "./App.css"


export default function App(){
    return (
        <>
            <div className='container'>
                <Navbar />
                <Main />
            </div>
        </>
    )
}
