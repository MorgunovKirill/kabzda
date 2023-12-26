import {AccordionBody} from "./AccordionBody";
import {AccordionTitle} from "./AccordionTitle";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setIsCollapsed: (value: boolean) => void
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <div className='accordion'>
            <AccordionTitle title={props.title} collapsed={props.collapsed} setIsCollapsed={props.setIsCollapsed}/>
            {!props.collapsed && <AccordionBody />}
        </div>
    )
}
