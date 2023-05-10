import React from "react";
import { createRoot }  from "react-dom/client";
import "./styles.scss";

const root = createRoot(document.getElementById("root") as HTMLElement);

type HelloWorldProps = {
    greeting: string;
}

function HelloWorld({ greeting }: HelloWorldProps) {
    return <h1>Hello { greeting }</h1>
}

root.render(<HelloWorld greeting="Bobbie!!!" />);