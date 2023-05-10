import { Enumerable } from "@funnelnek/common";
import { Inject, Service } from "@funnelnek/ioc";
import { configureStore } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { Action, AnyAction, Middleware, Observer, Reducer, ReducersMapObject, StoreEnhancer, Unsubscribe } from "redux";
import { EpicMiddleware, Epic, createEpicMiddleware, combineEpics, StateObservable } from "redux-observable";
import { BehaviorSubject, mergeMap, Subject, Subscription, Observable } from "rxjs";
import { AGGREGATES, SAGAS } from "./constants";
import { IAggregateRoot } from "./contracts";
import { AnnotatedAggregate } from "./contracts/AnnotatedAggregate";


@Service()
export class AggregateRoot<
    S = any, 
    A extends Action = AnyAction, 
    M extends ReadonlyArray<Middleware<any, S>> = ReadonlyArray<Middleware<any, S>>, 
    E extends ReadonlyArray<StoreEnhancer> = ReadonlyArray<StoreEnhancer>>
    implements IAggregateRoot<S, A, M, E>  {

    protected _store: ToolkitStore<S, A, M>;
    protected state$: Subject<S> = new Subject<S>();
    protected unsubscribe: Unsubscribe;
    protected saga: EpicMiddleware<AnyAction>;
    protected sagas: BehaviorSubject<Epic>;
    protected action$: Epic;
    
    get reducer(): Reducer<S, A> | ReducersMapObject<S, A> {
        if (!this.aggregates.length) {

        }

        return this.aggregates.reduce((aggregate, { name , reducer}) => {
             (aggregate as Enumerable<Reducer>)[name] = reducer;
             return aggregate;
        }, {} as ReducersMapObject<S, A>);
    }   
   

    constructor(@Inject(AGGREGATES) protected aggregates: AnnotatedAggregate[], @Inject(SAGAS) sagas: Epic[]) {
        const saga = this.saga = createEpicMiddleware();
        const epic$ = this.sagas = new BehaviorSubject(combineEpics(...sagas));        
        const action$ = this.action$ = (action: Observable<any>, state: StateObservable<any>, deps: any) => epic$
        .pipe(mergeMap(epic => epic(action, state, deps)));
        
        let store = this._store = configureStore<S, A, M, E>(this);
        this.unsubscribe = store.subscribe(() => {
            this.state$.next(store.getState());
        });
    }

    get store(): ToolkitStore<S, A> {
        return this._store;
    }

    get actions(): Epic {
        return this.action$;
    }

    subscribe(observer: Partial<Observer<S>>): Subscription {
        return this.state$.subscribe(observer);
    }

    on(actions: Epic) {
        this.sagas.next(actions);
    }
}