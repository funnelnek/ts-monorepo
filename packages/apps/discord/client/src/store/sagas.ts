import { Action } from 'redux';
import { createEpicMiddleware, combineEpics, Epic, StateObservable } from 'redux-observable';
import { Observable, of } from 'rxjs';

export const discordSagas: Epic = (action$: Observable<Action>, state$: StateObservable<any>, dependencies: any): Observable<Action> => {
    return of({ type: ""})
}

export const sagaMiddleware = createEpicMiddleware();