import { useState, memo } from "react";

function Counter({ count, setCount }) {
    console.log('Counter component');

    return (
        <div className="p-3">
            <h1 className="text-4xl">{count}</h1>
            <button onClick={setCount}>Increment</button>
        </div>
    );
}

export default memo(Counter);