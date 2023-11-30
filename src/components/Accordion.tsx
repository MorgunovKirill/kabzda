import {FC} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export const Accordion: FC = () => {
    return (
        <div className='accordion'>
            <AccordionTitle/>
            <AccordionBody />
        </div>
    )
}
