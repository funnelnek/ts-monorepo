import { useReducer } from "react";
import { IPlanner } from "../contracts";
import { Planner } from "../model/Planner";
import { PlannerEventHandler } from "../PlannerEventHandler";


export const usePlanner = (props: any): IPlanner => {
    const [ planner, dispatch ] = useReducer(PlannerEventHandler, props, Planner.create);

    return new Proxy(planner, {

    });
}