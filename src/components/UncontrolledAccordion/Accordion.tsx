import {AccordionBody} from "./AccordionBody";
import {AccordionTitle} from "./AccordionTitle";
import {FC, useState} from "react";

type AccordionPropsType = {
    title: string
}

export const UncontrolledAccordion:FC<AccordionPropsType> = ({title}) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

    const toggleAccordion = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div className='accordion'>
            <AccordionTitle title={title} onClickHandler={toggleAccordion}/>
            {!isCollapsed && <AccordionBody />}
        </div>
    )
}
