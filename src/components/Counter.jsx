import { useState, useEffect } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    const [on, setOn] = useState(false)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    const toggleLight = () => {
        setOn(!on)
    }

    //use to handle side effect
    useEffect(() => {
        console.log('Button clicked');
    }, [count])

    return (
        <div className="border p-4 rounded-md w-[400px] m-4">
            <h1 className="text-center">Counter App</h1>
            <p className="text-2xl font-bold text-center">
                {count}
            </p>
            <div className="flex gap-2 justify-center mt-4">
                <button onClick={increment}>Add</button>
                <button onClick={decrement}>Subtract</button>
                <button onClick={reset}>Reset</button>
            </div>
            <button onClick={toggleLight}>
                {
                    on ? "ON" : "OFF"
                }
            </button>
            <p>
                {
                    on ? "You have switch on light" :
                        "You have trun off light"
                }
            </p>
        </div>
    )
}
export default Counter