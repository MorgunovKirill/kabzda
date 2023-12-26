import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/Accordion";
import {UnControlledRating} from "./components/UnControlledRating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    const [tumblerState, setTumblerState] = useState<boolean>(false)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">
            <Rating value={3} />
            <Accordion title={'First'} collapsed={accordionCollapsed} setIsCollapsed={setAccordionCollapsed} />
            <UncontrolledAccordion title={'third'} />
            <UnControlledRating />
            <OnOff value={tumblerState} setTumblerState={setTumblerState} />
            <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}
        </div>
    );
}

export default App;
