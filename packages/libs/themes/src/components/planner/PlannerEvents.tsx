import React, { FC, useContext } from "react";
import { PlannerContext } from "./context/PlannerContext";
import { PlannerEvent } from "./PlannerEvent";


export const PlannerEvents: FC<any> = (props: any): JSX.Element => {
    const planner = useContext(PlannerContext);
    
    return (
        <div className="planner-events">
            <div className="today-date">
                <div className="event-weekday">{  }</div>
                <div className="event-date">
                    <span className="date">{  }</span>
                    <span className="month">{  }</span>
                    <span className="year">{  }</span>
                </div>
            </div>
            <div className="events">
                <PlannerEvent />
                <PlannerEvent />
                <PlannerEvent />
            </div>
            <div className="add-event-widget">
                <header className="add-event-header">
                    <div className="title"></div>
                </header>

            </div>
        </div>
    );
}