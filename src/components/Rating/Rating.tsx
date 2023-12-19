import {Star} from "./Star";

type RatingPropsType = {
    value: number
}

export const Rating = ({value}: RatingPropsType) => {
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
