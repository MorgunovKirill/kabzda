import {Star} from "./Star";
import {useState} from "react";

export type RatingTypeValue =  0 | 1 | 2 | 3 | 4 | 5;

export const UnControlledRating = () => {
    const [rating, setRating] = useState<RatingTypeValue>(0)

    return (
        <div>
            <Star selected={rating >= 1} value={1} setRating={setRating}/>
            <Star selected={rating >= 2} value={2} setRating={setRating}/>
            <Star selected={rating >= 3} value={3} setRating={setRating}/>
            <Star selected={rating >= 4} value={4} setRating={setRating}/>
            <Star selected={rating >= 5} value={5} setRating={setRating}/>
        </div>
    )
}
