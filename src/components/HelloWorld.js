import { memo } from "react";

function HelloWorld() {
    console.log('Hello World Component');

    return (
        <div>Hello World</div>
    );
}

export default memo(HelloWorld);