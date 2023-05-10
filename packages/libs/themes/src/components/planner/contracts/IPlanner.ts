import { ICalendar } from "../../calendar/contracts";
import { PlannerEvent } from "../model/PlannerEvent";

export interface IPlanner {
    calendar: ICalendar;
    events: PlannerEvent[];
}