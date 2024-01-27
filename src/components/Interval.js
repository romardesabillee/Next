import { useEffect, useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }

    }, [count]);

    return (
        <div>
            {count}
        </div>
    );
}