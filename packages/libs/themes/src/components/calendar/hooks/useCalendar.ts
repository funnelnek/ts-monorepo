import { Reducer, useCallback, useEffect, useReducer, useState } from "react";
import { CalendarEventHandler } from "../CalendarEventHandler";
import { CalendarEvent } from "../constants";
import { CalendarProps, ICalendar } from "../contracts";
import { Calendar } from "../model/Calendar";

export const useCalendar = (props: CalendarProps): ICalendar => {    
    const [ calendar, dispatch ] = useReducer<Reducer<ICalendar, CalendarEvent>, CalendarProps>(CalendarEventHandler, props, Calendar.create);    
    const [ dates, setDates ] = useState(() => calendar.dates);

    let next = useCallback(() => {
        calendar.next();
        setDates(() => calendar.dates);
    }, [calendar]);

    let previous = useCallback(() =>{
        calendar.previous();
        setDates(() => calendar.dates);
    }, [calendar]);

    let today = useCallback(() => {
        calendar.today();
        setDates(() => calendar.dates);
    }, [calendar]);

    let goto = useCallback((date: string | Date) => {
        calendar.goto(date);
        setDates(() => calendar.dates);
    }, [calendar]);

    let onGoToChange = useCallback(calendar.onGoToChange, [calendar]);

    let onGoTo = useCallback(() => {
        calendar.onGoTo();
        setDates(() => calendar.dates);
    }, [calendar]);

    useEffect(() => {
        calendar.on("change", dispatch);

        return () => { calendar.off("change", dispatch); }
        
    }, [calendar]);

    return new Proxy(calendar, {
       get(calendar, prop: string | symbol, receiver: any): any {
            switch (prop) {
                case "previous":
                    return previous;
                case "next":
                    return next;
                case "today":
                    return today;
                case "goto":
                    return goto;
                case "dates":
                    return dates;
                case "onGoToChange":
                    return onGoToChange;
                case "onGoTo":
                    return onGoTo;
                default: return Reflect.get(calendar, prop, receiver);
            }
       }
    });
}