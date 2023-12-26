import {Star} from "./Star";
import {RatingTypeValue} from "../UnControlledRating/Rating";

type RatingPropsValue = {
    value: RatingTypeValue
}

export const Rating = ({value}: RatingPropsValue) => {
    return (
        <div>
            <Star selected={value >= 1}/>
            <Star selected={value >= 2}/>
            <Star selected={value >= 3}/>
            <Star selected={value >= 4}/>
            <Star selected={value >= 5}/>
        </div>
    )
}
