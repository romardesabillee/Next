import { useState } from "react";

export default function Counter({ setCount }) {

    function updateCount() {
        setCount((prevCount) => prevCount);
    }

    return (
        <div className="p-3">
            <button className="default-button" onClick={updateCount}>Increment</button>
        </div>
    );
}