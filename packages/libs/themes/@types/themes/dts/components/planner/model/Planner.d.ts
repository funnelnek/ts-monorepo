import { ICalendar } from "../../calendar/contracts";
import { IPlanner } from "../contracts";
import { PlannerEvent } from "./PlannerEvent";
export declare class Planner implements IPlanner {
    static create(): IPlanner;
    private _calendar;
    private _events;
    constructor(calendar?: ICalendar);
    get calendar(): ICalendar;
    get events(): PlannerEvent[];
}
