import React, { FC } from "react";
import cx from "react-classset";
import { Icon } from "../icon";
import { CarouselContext } from "./context/CarouselContext";
import { useCarousel } from "./hooks/useCarousel";


export const Carousel: FC<any> = (props: any) => {
    const carousel = useCarousel(props);
    const { isDragging, showNextButton, showPreviousButton, ref, previous, next, onDrag, onDragEnd, onDragStart } = carousel;
    let { children, className } = props;
    
    const cls = cx({
        carousel: true,
        dragging: isDragging,
        [className]: className ? true : false
    });

    const events = {
        onMouseDown: onDragStart,
        onMouseMove: onDrag,
        onMouseUp: onDragEnd,
        onMouseLeave: onDragEnd,
        onTouchStart: onDragStart,
        onTouchMove: onDrag,
        onTouchEnd: onDragEnd
    }

    const previousButtonClasses = cx({
        show: showNextButton,
        previous: true,
        control: true,
    });

    const nextButtonClasses = cx({
        show: showPreviousButton,
        next: true,
        control: true
    });

    return (
        <CarouselContext.Provider value={carousel}>
            <div className={cls} {...events} ref={ref}>
                <span className={previousButtonClasses} onClick={previous}>
                    <Icon prefix="fa" variant="solid" name="angle-left" />
                </span>
                { children }
                <span className={nextButtonClasses} onClick={next}>
                    <Icon prefix="fa" variant="solid" name="angle-right" />
                </span>
            </div>
        </CarouselContext.Provider>
    );
}