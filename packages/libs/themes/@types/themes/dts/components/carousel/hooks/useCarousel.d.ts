import { MutableRefObject } from "react";
import { Carousel } from "../model/Carousel";
export declare const useCarousel: (options: any) => Carousel & {
    isDragging: boolean;
    ref: MutableRefObject<HTMLDivElement>;
};
