import { useEffect, useRef, useState } from "react";

export default function Home() {
    const divElement = useRef(0);

    useEffect(() => {
        divElement.current.innerHTML = 'Hello';
    }, []);

    return (
        <div ref={divElement} id="element">
            Hello World
        </div>
    );
}