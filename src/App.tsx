import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    const [tumblerState, setTumblerState] = useState<boolean>(false)
    return (
        <div className="App">
            <Accordion title={'First'} collapsed={true} />
            <Rating value={0} />
            <Rating value={3} />
            <Accordion title={'Second'} collapsed={false} />
            <Rating value={5} />
            <OnOff value={tumblerState} setTumblerState={setTumblerState} />
        </div>
    );
}

export default App;
