import React, { FC } from "react";
import { PlannerContext } from "./context/PlannerContext";
import { usePlanner } from "./hooks/usePlanner";
import { PlannerCalendar } from "./PlannerCalendar";
import { PlannerEvents } from "./PlannerEvents";


export const Planner: FC<any> = (props: any): JSX.Element => {
    const planner = usePlanner(props);

    return (        
        <div className="planner">
            <PlannerContext.Provider value={planner}>
                <PlannerCalendar />
                <PlannerEvents />                
            </PlannerContext.Provider>
        </div>
    );
}