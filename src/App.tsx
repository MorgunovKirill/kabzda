import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/Accordion";
import {UnControlledRating} from "./components/UnControlledRating/Rating";

function App() {
    const [tumblerState, setTumblerState] = useState<boolean>(false)
    return (
        <div className="App">
            <Accordion title={'First'} collapsed={true} />
            <Rating value={0} />
            <Accordion title={'Second'} collapsed={false} />
            <UncontrolledAccordion title={'third'} />
            <UnControlledRating />
            <OnOff value={tumblerState} setTumblerState={setTumblerState} />
        </div>
    );
}

export default App;
