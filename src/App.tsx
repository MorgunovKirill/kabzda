import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";

function App() {
    return (
        <div className="App">
            <Rating />
            <Accordion />
        </div>
    );
}

export default App;
