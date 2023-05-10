import { EmitterHandler, EventEmitter, NextFn, EventHandler } from "@funnelnek/common";
import { ChangeDetection } from "libs/common/src/types/ChangeDetection";
import { DispatchWithoutAction, MutableRefObject, MouseEvent, TouchEvent } from "react";
import { Observer, Subject, Subscription } from "rxjs";
import { Slide } from "./Slide";


export class Carousel implements EventEmitter {
    protected _isDragging: boolean = false;
    protected _showPreviousButton: boolean = false;
    protected _showNextButton: boolean = false;
    protected _dragStarted: boolean = false;
    protected latestX: number = 0;
    protected previousScrollLeft: number = 0;
    protected slides: Slide[] = [];
    protected carousel!: HTMLElement;
    protected margin: number = 0;
    protected slideWidth: number = 0;
    protected isDragging$: Subject<boolean> = new Subject<boolean>();
    protected showPreviousButton$: Subject<boolean> = new Subject<boolean>();
    protected showNextButton$: Subject<boolean> = new Subject<boolean>();
    protected dispatch!: DispatchWithoutAction;
    protected subscriptions: Map<EmitterHandler, Subscription> = new Map<EmitterHandler, Subscription>();
    protected subscription: Subscription;
    protected ref!: MutableRefObject<HTMLDivElement | undefined>;

    constructor(protected options: any) {
        this.margin = options.margin ?? 0;
        this.subscription = new Subscription(() => {});


        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.onDrag = this.onDrag.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    get isDragging(): boolean {
        return this._isDragging;
    }

    get showPreviousButton(): boolean {
        return this._showPreviousButton;
    }

    get showNextButton(): boolean {
        return this._showNextButton;
    }

    next(e: MouseEvent): void {
        let { carousel } = this;

        if (!carousel) return;

        carousel.scrollLeft += -this.slideWidth;

        this.shouldShowNextButton();
    }

    previous(e: MouseEvent): void {        
        let { carousel } = this;

        if (!carousel) return;
        
        carousel.scrollLeft += this.slideWidth;

        this.shouldShowPreviousButton();
    }

    on<T = any>(event: string, observer: Observer<T>): Subscription;
    on(event: string, next: NextFn): Subscription;
    on(event: string, state: ChangeDetection, changeDetection: boolean): Subscription;
    on(event: string, handler: EventHandler): void;    
    on(event: string, handler: EmitterHandler, changeDetection?: boolean): Subscription | void {
        if  (event === "drag") {            
            if (handler instanceof Function) {
                let subscription = this.isDragging$.subscribe((isDragging) => {
                    if (changeDetection) {
                        (handler as ChangeDetection)(() => isDragging);
                    }    
                    
                    handler(isDragging);
                });
                
                this.subscriptions.set(handler, subscription);
    
                this.subscription.add(subscription);
                return subscription;
            }

            let subscription = this.isDragging$.subscribe(handler);

            this.subscriptions.set(handler, subscription);    
            this.subscription.add(subscription);

            return subscription;
        }

        if (event === "show:next") {
            let subscription = this.showNextButton$.subscribe(handler);
            this.subscriptions.set(handler, subscription);

            this.subscription.add(subscription);
            return subscription;
        }

        if (event === "show:previous") {
            let subscription = this.showPreviousButton$.subscribe(handler);
            this.subscriptions.set(handler, subscription);

            this.subscription.add(subscription);
            return subscription;
        }
    }

    off(event: string, handler: (...args: any[]) => void): void {
        if  (event === "drag") {
            let subscription = this.subscriptions.get(handler);

            if (subscription) {
                subscription.unsubscribe();
                this.subscription.remove(subscription);
            }
        }
    }

    once(event: string, handler: (...args: any[]) => void): void {
        throw new Error("Method not implemented.");
    }

    emit(event: string, ...args: any[]): void {
        if (event === "drag") {
            let state = args[0];
            this.isDragging$.next(state);

            this.dispatch();
        }
    }

    onDrag(e: MouseEvent | TouchEvent): void {        
        if (!this._dragStarted) return;

        this._isDragging = true;
        
        e.preventDefault();
        
        let x: number = 0;

        let { carousel } = this;

        if (e.nativeEvent instanceof MouseEvent) {
            x = (e as MouseEvent).pageX;
            carousel.scrollLeft = this.displacement(x);
        } else {
            let touch = (e as TouchEvent).touches[0];
            x = touch.pageX;
            carousel.scrollLeft = this.displacement(x);
        }


        
        this.showButtons();
    }
    
    onDragStart(e: MouseEvent | TouchEvent): void {
        console.log("Start Dragging")
        this._dragStarted = true;

        if (e.nativeEvent instanceof MouseEvent) {
            this.latestX = (e as MouseEvent).pageX;
            this.previousScrollLeft = this.carousel.scrollLeft;
        } else {
            let touch = (e as TouchEvent).touches[0];
    
            this.latestX = touch.pageX;
            this.previousScrollLeft = this.carousel.scrollLeft;
        }
        

        this.emit("drag", true);
    }

    onDragEnd(e: MouseEvent | TouchEvent): void {
        this._dragStarted = false;
        this._isDragging = false;       

        this.auto();
        this.emit("drag", false);
    }

    use(dispatch: DispatchWithoutAction) {
        this.dispatch = dispatch;
    }

    init(node: HTMLDivElement): void {
        this.carousel = node;
        let slide = node.querySelector(".slide");

        if (slide) {
            this.slideWidth = slide.clientWidth + this.margin;
        }

    }

    unmount() {
        this.subscription.unsubscribe();
    }

    protected shouldShowPreviousButton(): boolean {
        let { carousel } = this;
        return carousel.scrollLeft === (carousel.scrollWidth - carousel.clientWidth);        
    }

    protected shouldShowNextButton(): boolean {
        return this.carousel.scrollLeft === 0;
    }

    protected showButtons() {
        this.showNextButton$.next(this.shouldShowNextButton());
        this.showPreviousButton$.next(this.shouldShowPreviousButton());
    }

    protected auto() {        
        let { carousel, previousScrollLeft, latestX: previousX } = this;
        let { clientWidth, scrollWidth } = carousel;
        
        if (carousel.scrollLeft === (scrollWidth - clientWidth)) return;

        let distance = Math.abs(this.displacement(previousX));
        let width = this.slideWidth + this.margin;
        let displacement = width - distance;

        // Scrolling right
        if (carousel.scrollLeft > previousScrollLeft) {
            this.carousel.scrollLeft += distance > (width / 3) ? displacement : -distance;
        }
        
        // Scrolling left
        this.carousel.scrollLeft -= distance > (width / 3) ? displacement : -distance;
    }

    protected displacement(x: number): number {
        return this.previousScrollLeft - (x - this.latestX);
    }
}