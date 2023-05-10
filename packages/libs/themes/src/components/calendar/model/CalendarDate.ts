import { ICalendar } from "../contracts";
import { ICalendarDate } from "../contracts/ICalendarDate";

export class CalendarDate implements ICalendarDate {
    protected _date!: number;
    protected _today!: boolean;
    protected _active!: boolean;
    protected _inMonth!: boolean;

    constructor(protected datetime: Date, protected calendar: ICalendar) {
    }

    get date(): number {
        return this._date;
    }

    get today(): boolean {
        return this._today;
    }

    get active(): boolean {
        return this._active;
    }

    get inMonth(): boolean {
        return this._inMonth;
    }

    onSelection(): void {
        
    }
}