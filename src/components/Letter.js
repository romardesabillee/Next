import { memo } from "react";

function Letter({ letter, setLetter }) {
    console.log('Letter Component');

    return (
        <div className="p-3">
            <h1 className="text-4xl">{letter}</h1>
            <button onClick={setLetter}>Update Letter</button>
        </div>
    );
}

export default memo(Letter);