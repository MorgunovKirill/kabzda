type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setIsCollapsed: (value: boolean) => void
}

export const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={() => props.setIsCollapsed(!props.collapsed)}>{props.title}</h3>
    )
}
