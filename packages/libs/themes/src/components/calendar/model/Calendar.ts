import { Observer, Subject, Subscription } from "rxjs";
import { CalendarEvent } from "../constants";
import { CalendarMonth, Month } from "../constants/month";
import { DayOfWeek, Weekday } from "../constants/week";
import { CalendarProps, ICalendarDate } from "../contracts";
import { ICalendar } from "../contracts/ICalendar";
import { CalendarMode } from "../types";
import { immerable } from "immer";
import { ChangeEvent, EventHandler, FormEvent } from "react";
import moment from "moment";
import { EmitterHandler, NextFn } from "@funnelnek/common";
import { ChangeDetection } from "libs/common/src/types/ChangeDetection";

export class Calendar implements ICalendar {
    static create(props: CalendarProps): ICalendar {
        return new Calendar(props);
    }

    private _format: string = "MM-DD-YYYY";
    private _today: Date = new Date();
    private _currentMonth: number = this._today.getMonth();
    private _currentMonthName: string = this.getMonthName(this._currentMonth);
    private _currentYear: number = this._today.getFullYear();
    private _currentDate: number = this._today.getDate();
    private _currentDay: number = this._today.getDay();
    private _currentDayOfWeek: string = this.getDayName(this._today.getDay());
    private _currentWeek: number = this.calculateWeekOfYear(this._today);
    private _target: Date = new Date(this._today);
    private _targetMonth: number  = this._currentMonth;
    private _targetYear: number = this._currentYear;
    private _targetDay: number = this._currentDay;
    private _targetDate: number = this._currentDate;
    private _targetWeek: number = this._currentWeek;
    private _targetDayOfWeek: string = this._currentDayOfWeek;
    private _mode: CalendarMode = "month";
    private _searchDate!: Date;
    private self: Subject<ICalendar> = new Subject<ICalendar>();
    private subscriptions: Map<Function, Subscription> = new Map<Function, Subscription>();
    private month$: Subject<string> = new Subject<string>();
    private year$: Subject<number> = new Subject<number>();
    private date$: Subject<number> = new Subject<number>();

    [immerable] = true;

    constructor(props?: CalendarProps) {
        
        if (props?.calendar) {
            return props.calendar as Calendar;
        }

        if (props?.calendarRef) {
            if (typeof props.calendarRef === "function") {
                props.calendarRef(this);
            } else {
                props.calendarRef.current = this;
            }
        }

        this.month$.subscribe();

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.on = this.on.bind(this);
        this.off = this.off.bind(this);
        this.onGoToChange = this.onGoToChange.bind(this);
    }

    get mode(): CalendarMode {
        return this._mode;
    }
    set mode(value: CalendarMode) {
        this._mode = value;
    }

    get dayOfWeek(): string {
        return this._targetDayOfWeek;
    }

    get currentDayOfWeek(): string {
        return this._currentDayOfWeek;
    }

    get day(): number {
        return this._targetDay;
    }

    get date(): number {
        return this._targetDate;
    }

    get week(): number {
        return this._targetWeek;
    }

    get currentDate(): number {
        return this._currentDate;
    }

    get currentDay(): number {
        return this._currentDay;
    }

    get currentMonth(): string {
        return this.getMonthName(this._currentMonth);
    }

    get month(): string {
        return this.getMonthName(this._targetMonth);
    }

    get year(): number {
        return this._targetYear;
    }

    get currentYear(): number {
        return this._currentYear;
    }  

    get format(): string {
        return this._format;
    }

    get target(): Date {
        return this._target;
    }

    get dates(): ICalendarDate[] {
        return this.getActiveCalendarMonthDates();
    }

    on(event: string, observer: Observer<any>): Subscription;
    on(event: string, next: NextFn<any>): Subscription;
    on(event: string, state: ChangeDetection<any>, changeDetection: true): Subscription;
    on(event: string, handler: EventHandler<any>): void;
    on(event: string, dispatch: EmitterHandler, changeDetection: boolean = false): Subscription | void {
        let info = event.split(":");
        let subscription: Subscription;

        if (info.length === 1) {
            let scope = info[0];

            if (scope === "change") {

                if (dispatch instanceof Function && changeDetection) {
                    subscription = this.self.subscribe((calendar) => dispatch({ type: CalendarEvent.CHANGED }));
    
                    this.subscriptions.set(dispatch, subscription);
                }
            }

            return;
        }

        let type = info[1];

        // switch(type) {
        //     case "month":
        //         subscription = this.self.subscribe((calendar) => dispatch({ type: CalendarEvent.CHANGED }));

        //         this.subscriptions.set(dispatch, subscription);
        //         return;
        //     case "year":
        //     case "date":
        //     case "week":
        //     default:
        // }
    }

    off(event: string, handler: (...args: any[]) => void): void {
        let subscription = this.subscriptions.get(handler);
        subscription?.unsubscribe();
    }

    once(event: string, handler: (...args: any[]) => void): void {
        throw new Error("Method not implemented.");
    }

    onGoToChange(event: FormEvent<HTMLInputElement>): void {
        let input = event.target as HTMLInputElement;
        this._searchDate = moment(input.value, this.format).toDate();
    }

    onGoTo(): void {
        const { _searchDate: date } = this;

        if (date === undefined) {

        }

        this.goto(date);
    }
    
    emit(event: string): void {
        if (event === "change") {
            this.self.next(this);
        }
    }
    
    nextWeek(): void {
        throw new Error("Method not implemented.");
    }

    previousWeek(): void {
        throw new Error("Method not implemented.");
    }

    isLeapYear(): boolean {
        throw new Error("Method not implemented.");
    }

    nextYear(): void {
        let year = this.year;
        const date = this._target;
        
        date.setFullYear(++year);

        this._targetYear = year;

        this.emit("change:year");
    }

    previousYear(): void {
        let year = this.year;
        const date = this._target;
        
        date.setFullYear(--year);

        this._targetYear = year;

        this.emit("change:year");
    }

    goto(date: Date): void;
    goto(date: string): void;
    goto(date: Date | string): void {
        if (typeof date === "string") {
            date = new Date(date);
        }
        
        this._target = new Date(date);
        this._targetDay = date.getDay();
        this._targetDate = date.getDate();
        this._targetMonth = date.getMonth();
        this._targetYear = date.getFullYear();
        this._targetWeek = this.calculateWeekOfYear(date);
        this._targetDayOfWeek = this.getDayName(this._targetDay);

        this.emit("change");
    }

    getPreviousMonthLastDates(): ICalendarDate[] {
        let { _targetMonth: month, year } = this;
        const firstDayOfWeek = new Date(year, month, 1).getDay();
        const previousMonthLastDate= new Date(year, month, 0).getDate();
        const days: ICalendarDate[] = [];


        for(let i = firstDayOfWeek; i > 0; i--) {
            days.push({
                date: previousMonthLastDate - i + 1,
                inMonth: false,
                active: false,
                today: false
            });
        }

        return days;
    }

    getActiveMonthDates(): ICalendarDate[] {
        let { _targetMonth: month, year } = this;
        const lastDay = new Date(year, month + 1, 0).getDate();
        const days: ICalendarDate[] = [];

        for(let i = 1; i <= lastDay; i++) {
            days.push({
                date: i,
                inMonth: true,
                today: this.currentDate === i,
                active: false
            });
        }

        return days;
    }

    getNextMonthFirstDates(): ICalendarDate[] {
        let { _targetMonth: month, year } = this;        
        const lastDayOfWeek = new Date(year, month + 1, 0).getDay();
        const nextMonthDates = 7 - lastDayOfWeek - 1;
        const days: ICalendarDate[] = [];

        for(let i = 1; i <= nextMonthDates; i++) {
            days.push({
                date: i,
                today: false,
                inMonth: false,
                active: false
            });
        }

        return days;
    }    

    previousMonth() {
        let month = --this._targetMonth;
        const date = this._target;

        date.setMonth(month);

        let year = this._targetYear = date.getFullYear();
        month = this._targetMonth = date.getMonth();

        this.emit("change:month");
    }

    nextMonth(): void {
        const date = this._target;
        const month = ++this._targetMonth;
        date.setMonth(month);

        this._targetYear = date.getFullYear();
        this._targetMonth = date.getMonth();

        this.emit("change:month");
    }

    today(): void {
        let today = this._today;
        this.goto(today);
    }

    next(): void {
        let { mode } = this;

        switch (mode) {
            case "month":
                return this.nextMonth();
            case "year":
                return this.nextYear();
            case "date":
                return this.nextDate();
            case "week":
                return this.nextWeek();
        }
    }

    nextDate(): void {
        let day = ++this._targetDate;
        const date = this._target;
        date.setDate(day);

        day = this._targetDay = date.getDay();
        this._targetDate = date.getDate();
        this._targetYear = date.getFullYear();
        this._targetMonth = date.getMonth();
        this._targetWeek = this.calculateWeekOfYear(date);
        this._targetDayOfWeek = this.getDayName(day);

        this.emit("change:date");
    }

    previous() {
        let { mode } = this;

        switch (mode) {
            case "month":
                return this.previousMonth();
            case "year":
                return this.previousYear();
            case "date":
                return this.previousDate();
            case "week":
                return this.previousWeek();
        }
    }

    previousDate() {
        let day = --this._targetDate;
        const date = this._target;
        date.setDate(day);

        day = this._targetDay = date.getDay();
        this._targetDate = date.getDate();
        this._targetYear = date.getFullYear();
        this._targetMonth = date.getMonth();
        this._targetWeek = this.calculateWeekOfYear(date);
        this._targetDayOfWeek = this.getDayName(day);

        this.emit("change:date");
    }

    private getActiveCalendarMonthDates(): ICalendarDate[] {
        return this.getPreviousMonthLastDates().concat(this.getActiveMonthDates(), this.getNextMonthFirstDates());
    }

    private getDayName(day: number): string {
        let { SUN, MON, TUE, WED, THU, FRI, SAT } = DayOfWeek;

        switch(day) {
            case SUN:
                return Weekday.SUN;
            case MON:
                return Weekday.MON;
            case TUE:
                return Weekday.TUE;
            case WED:
                return Weekday.WED;
            case THU:
                return Weekday.THU;
            case FRI:
                return Weekday.FRI;
            case SAT:
                return Weekday.SAT;
            default: return "unknown";
        }
    }

    private getMonthName(month: number): string {
        const { JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC } = Month;

        switch (month) {
            case JAN:
                return CalendarMonth.JAN;
            case FEB:                
                return CalendarMonth.FEB;
            case MAR:
                return CalendarMonth.MAR;
            case APR:
                return CalendarMonth.APR;
            case MAY:
                return CalendarMonth.MAY;
            case JUN:
                return CalendarMonth.JUN;
            case JUL:
                return CalendarMonth.JUL;
            case AUG:
                return CalendarMonth.AUG;
            case SEP:
                return CalendarMonth.SEP;
            case OCT:
                return CalendarMonth.OCT;
            case NOV:
                return CalendarMonth.NOV;
            case DEC:
                return CalendarMonth.DEC;
            default: return "unknown";
        }
    }

    private calculateWeekOfYear(date: Date): number {
        return 0;
    }
}