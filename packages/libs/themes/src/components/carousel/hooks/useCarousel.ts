import { MutableRefObject, useCallback, useEffect, useReducer, useRef, useState } from "react";
import { Carousel } from "../model/Carousel";

export const useCarousel = (options: any): Carousel & { isDragging: boolean, ref: MutableRefObject<HTMLDivElement>  } => {
    let [carousel, dispatch] = useReducer((carousel: Carousel) => carousel, options, (options) => new Carousel({ options }));    
    let ref = useRef<HTMLDivElement>();

    ref = new Proxy(ref, {
        set(ref: MutableRefObject<HTMLDivElement>, key: "current", value: HTMLDivElement, receiver: any): boolean {
            carousel.init(value);
            return Reflect.set(ref, key, value, receiver);
        }
    });

    let [isDragging, setDragging] = useState(() => carousel.isDragging);
    let [showNextButton, setShowNextButton] = useState(() => carousel.showNextButton);
    let [showPreviousButton, setShowPreviousButton] = useState(() => carousel.showPreviousButton);
    let next = useCallback(carousel.next, [carousel]);
    let previous = useCallback(carousel.previous, [carousel]);
    let onDrag = useCallback(carousel.onDrag, [carousel]);
    
    useEffect(() => {
        carousel.use(dispatch);        
        carousel.on("drag", setDragging, true);        
        carousel.on("show:next", setShowNextButton, true);
        carousel.on("show:previous", setShowPreviousButton, true);

        return carousel.unmount();
    }, [
        carousel, 
        dispatch, 
        setDragging,
        setShowNextButton,
        setShowPreviousButton
    ]);

    return new Proxy(carousel, {
        get(carousel, key: string | symbol, receiver: any) {
            switch(key) {
                case "onDrag":
                    return onDrag;
                case "next":
                    return next;
                case "previous":
                    return previous;
                case "isDragging": 
                    return isDragging;
                case "showNextButton":
                    return showNextButton;
                case "showPreviousButton":
                    return showPreviousButton;
                case "ref":
                    return ref;
                default: return Reflect.get(carousel, key, receiver);
            }
        }
    }) as Carousel & { isDragging: boolean, ref: MutableRefObject<HTMLDivElement> };
}