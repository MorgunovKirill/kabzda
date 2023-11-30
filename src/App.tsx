import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";

function App() {
    return (
        <div className="App">
            <Accordion title={'First'} collapsed={true} />
            <Rating value={3} />
            <Accordion title={'Second'} collapsed={false} />
            <Rating value={5} />
        </div>
    );
}

export default App;
