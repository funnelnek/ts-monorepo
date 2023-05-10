import { Type } from "@funnelnek/ioc";
import { Action, AnyAction, CaseReducer, PrepareAction, SliceCaseReducers } from "@reduxjs/toolkit";
import { IAggregate } from "../contracts";
import { ICommandHandler } from "../contracts/ICommandHandler";


export const CommandHandler = <T =any>(handler: Type<ICommandHandler<T>> | { use: PrepareAction<T> }) => {
    return <S = any, A extends IAggregate<S> = IAggregate<S>, C extends Action<string> = AnyAction>(proto: A, method: string, descriptor: TypedPropertyDescriptor<CaseReducer<S, C>>): void => {

    }
}