import React, { FC } from "react";
import { Icon } from "../icon";
import { IPlannerEvent } from "./contracts";


export const PlannerEvent: FC<IPlannerEvent> = (props: IPlannerEvent): JSX.Element => {
    return (
        <div className="event">
            <div className="event-title">
                <span className="dot" />
                <h3 className="title">{  }</h3>
            </div>
            <div className="event-time">
                <span className="start-time">{  }</span> - <span className="end-time">{  }</span>
            </div>
        </div>
    )
}