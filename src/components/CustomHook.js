import { useCount } from "@/hooks/useCount";
import { useEffect, useRef, useState } from "react";

export default function Home() {
    const { increment, count: newCount, decrement } = useCount();

    return (
        <div>
            <h1>{newCount}</h1>
            <button onClick={increment} className="default-button">Increment</button>
            <button onClick={decrement} className="default-button">Decrement</button>
        </div>
    );
}