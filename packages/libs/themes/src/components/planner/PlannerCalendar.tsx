import React, { FC, useContext } from "react";
import { Calendar } from "../calendar";
import { PlannerContext } from "./context/PlannerContext";


export const PlannerCalendar: FC<any> = (props: any): JSX.Element => {
    const planner = useContext(PlannerContext);
    
    return (
        <div className="planner-calendar">
            <Calendar calendar={planner.calendar} />
        </div>
    );
}