import React ,{useState} from "react";
import "./state.css"
const State = () => {
    const [state,setState] = useState(5)
    const handleIncrement = () => {
        setState(state+1);
    }
    const handleDecrement = () => {
        if(state > 0) {
        setState(state - 1);
        }
    }
    return (
        <div className="state-container">
            <h1>Counter Example</h1>
            <h1 className="count">{state}</h1>
            <div className="button">
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
            

        </div>
    )
}
export default State;