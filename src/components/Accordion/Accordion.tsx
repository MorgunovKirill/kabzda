import {AccordionBody} from "./AccordionBody";
import {AccordionTitle} from "./AccordionTitle";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <div className='accordion'>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody />}
        </div>
    )
}
