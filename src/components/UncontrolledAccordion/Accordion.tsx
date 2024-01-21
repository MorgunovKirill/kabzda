import {AccordionBody} from "./AccordionBody";
import {AccordionTitle} from "./AccordionTitle";
import {FC, useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    title: string
}

export const UncontrolledAccordion:FC<AccordionPropsType> = ({title}) => {
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    const toggleAccordion = () => {
        dispatch({type: TOGGLE_COLLAPSED})
    }

    return (
        <div className='accordion'>
            <AccordionTitle title={title} onClickHandler={toggleAccordion}/>
            {!state.collapsed && <AccordionBody />}
        </div>
    )
}
