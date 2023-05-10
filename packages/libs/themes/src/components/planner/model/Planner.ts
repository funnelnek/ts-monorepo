import { Calendar } from "../../calendar/model/Calendar";
import { ICalendar } from "../../calendar/contracts";
import { IPlanner } from "../contracts";
import { PlannerEvent } from "./PlannerEvent";

export class Planner implements IPlanner {
    static create(): IPlanner {
        return new Planner();
    }

    private _calendar: ICalendar;
    private _events: PlannerEvent[] = [];

    constructor(calendar?: ICalendar) {
        if (calendar === undefined) {
            this._calendar = new Calendar();
            return;
        }
        
        this._calendar = calendar;
    }

    get calendar(): ICalendar {
        return this._calendar;
    }

    get events(): PlannerEvent[] {
        return this._events;
    }
}