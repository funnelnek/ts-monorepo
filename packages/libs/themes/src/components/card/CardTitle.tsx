import React, { FC, HTMLProps, useContext } from "react"
import { CardContext } from "./context";


export const CardTitle: FC<HTMLHeadingElement> = (): JSX.Element => {
    const card = useContext(CardContext);

    return (
        <h3 className="card-title">
            { card.title }
        </h3>
    );
}