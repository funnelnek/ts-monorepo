import React, { FC } from "react";
import cx from "react-classset";
import { Button } from "../button";
import { Icon } from "../icon"
import { CalendarMonth } from "./CalendarMonth";
import { CalendarProps } from "./contracts";
import { useCalendar } from "./hooks/useCalendar";
import { CalendarContext } from "./context/CalendarContext";

export const Calendar: FC<CalendarProps> = (props: CalendarProps): JSX.Element => {
    const calendar = useCalendar(props);

    return (
        <CalendarContext.Provider value={calendar}>
            <div className="calendar">
                <div className="current">
                    <Button onClick={calendar.previous}>
                        <Icon className="previous" name="arrow-left" />
                    </Button>                
                    <div className="month-year">
                        <span className="month">
                            { calendar.month }
                        </span>
                        <span className="year">
                            { calendar.year }
                        </span>
                    </div>
                    <Button onClick={calendar.next}>
                        <Icon className="next" name="arrow-right" />
                    </Button>
                </div>
                { calendar.mode === "month" && (
                    <CalendarMonth>
                        { 
                            calendar.dates.map(({ date, today, inMonth, active }, i) => { 
                                const cls = cx({ date, today, active, ['in-month']: inMonth });
                                return (<div key={i} className={cls}>{ date }</div>)
                            }) 
                        }
                    </CalendarMonth>
                    )
                }
            </div>
        </CalendarContext.Provider>
    );
}