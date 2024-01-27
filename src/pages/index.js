import HelloWorld from "@/components/HelloWorld";
import { useCallback, useState } from "react";
import Counter from "@/components/Counter";
import Letter from "@/components/Letter";

export default function Home() {
    const [count, setCount] = useState(0);
    const [letter, setLetter] = useState('a');

    const setTheCount = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    const setRandomLetter = useCallback(() => {
        setLetter(String.fromCharCode(Math.floor(Math.random() * 25) + 97));
    }, []);

    return (
        <div>
            <HelloWorld />
            <Counter 
                count={count}
                setCount={setTheCount}/>
            <Letter 
                letter={letter}
                setLetter={setRandomLetter}
            />
        </div>
    );
}