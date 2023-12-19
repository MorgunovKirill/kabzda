import {Star} from "./Star";
import {useState} from "react";

export const UnControlledRating = () => {
    const [rating, setRating] = useState<number>(0)

    return (
        <div>
            <Star selected={rating >= 1}/>
            <button onClick={() => {setRating(1)}}>1</button>
            <Star selected={rating >= 2}/>
            <button onClick={() => {setRating(2)}}>2</button>
            <Star selected={rating >= 3}/>
            <button onClick={() => {setRating(3)}}>3</button>
            <Star selected={rating >= 4}/>
            <button onClick={() => {setRating(4)}}>4</button>
            <Star selected={rating >= 5}/>
            <button onClick={() => {setRating(5)}}>5</button>
        </div>
    )
}
