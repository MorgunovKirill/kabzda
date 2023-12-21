import {FC} from "react";

type StarPropsType = {
    value: number,
    selected?: boolean,
    setRating: (value: number) => void,
}

export const Star: FC<StarPropsType> = ({value, selected, setRating}) => {
    return selected ? <b onClick={() => setRating(value)}>Star </b> :
        <span onClick={() => setRating(value)}>Star </span>;
}
