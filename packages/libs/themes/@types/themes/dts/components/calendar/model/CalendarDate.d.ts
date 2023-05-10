import { ICalendar } from "../contracts";
import { ICalendarDate } from "../contracts/ICalendarDate";
export declare class CalendarDate implements ICalendarDate {
    protected datetime: Date;
    protected calendar: ICalendar;
    protected _date: number;
    protected _today: boolean;
    protected _active: boolean;
    protected _inMonth: boolean;
    constructor(datetime: Date, calendar: ICalendar);
    get date(): number;
    get today(): boolean;
    get active(): boolean;
    get inMonth(): boolean;
    onSelection(): void;
}
