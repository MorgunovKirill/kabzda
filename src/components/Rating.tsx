import {Star} from "./Star";

type RatingPropsType = {
    value: number
}

export const Rating = (props: RatingPropsType) => {
    return (
        <div>
            <Star selected={true}/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}
