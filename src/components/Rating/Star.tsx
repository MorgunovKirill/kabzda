type StarPropsType = {
    selected?: boolean
}

export const Star = (props: StarPropsType) => {
    if(props.selected) {
        return (
            <b>Star </b>
        )
    } else {
        return (
            <span>Star </span>
        )
    }
}
