import { useState } from "react"
import './Counter.css'
import ScoreOfClick from "./ScoreOfClick"

export const Counter = () => {
    const [count, setCount] = useState(0)

    const forIncrement = () => {
        setCount(count + 1)
    }

    const forDecrement = () => {
        setCount(count - 1)
    }
    return (
        <>
            <h1 className="head">{count}</h1>
            <div className="btn-grp">
                <button onClick={forIncrement} >Increment</button >
                <button onClick={forDecrement}>Decrement</button>
            </div>
            <ScoreOfClick score={count}/>
        </>
    )
}