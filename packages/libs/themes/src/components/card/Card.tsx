import React, { FC } from "react"
import { CardProps } from "./contracts"
import { CardContext } from "./context/CardContext";


export const Card: FC<CardProps> = ({ children, ...props }: CardProps): JSX.Element => {
    return (
        <div className="card">
            <CardContext.Provider value={props}>
                { children }
            </CardContext.Provider>
        </div>
    );
}