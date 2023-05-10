import React, { FC } from "react"
import { PaneProps } from "./contracts"


export const Pane: FC<PaneProps> = ({ children }: PaneProps): JSX.Element => {
    return (
        <div className="pane">
            { children }
        </div>
    );
}