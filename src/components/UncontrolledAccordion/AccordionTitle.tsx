type AccordionTitlePropsType = {
    title: string,
    onClickHandler: () => void
}

export const AccordionTitle = ({title, onClickHandler}: AccordionTitlePropsType) => {
    return (
        <button onClick={onClickHandler}>{title}</button>
    )
}
