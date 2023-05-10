import { useReducer } from "react";
import { Slide } from "../model/Slide";


export const useSlide = (props: any): Slide => {
    let [slide, dispatch] = useReducer((slide) => slide, props, Slide.create);


    return new Proxy(slide, {});
}