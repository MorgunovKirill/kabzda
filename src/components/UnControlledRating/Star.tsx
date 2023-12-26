import {FC} from "react";
import {RatingTypeValue} from "./Rating";

type StarPropsType = {
    value: RatingTypeValue,
    selected?: boolean,
    setRating: (value: RatingTypeValue) => void,
}

export const Star: FC<StarPropsType> = ({value, selected, setRating}) => {
    return selected ? <b onClick={() => setRating(value)}>Star </b> :
        <span onClick={() => setRating(value)}>Star </span>;
}
