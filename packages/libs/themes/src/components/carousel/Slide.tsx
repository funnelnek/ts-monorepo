import React, { FC } from "react"
import { useSlide } from "./hooks/useSlide";


export const Slide: FC<any> = (props: any): JSX.Element => {
    const slide = useSlide(props);
    let { children } = props;
    
    return (
        <div className="slide">
            { children }
        </div>
    );
}