import { ActionReducerMapBuilder, CaseReducers, createSlice, Slice, SliceCaseReducers, ValidateSliceCaseReducers } from "@reduxjs/toolkit";
import { NoInfer } from "@reduxjs/toolkit/dist/tsHelpers";
import { AggregateRoot } from "./AggregateRoot";
import { IAggregate } from "./contracts";
import { AnnotatedAggregate } from "./contracts/AnnotatedAggregate";


export class AggregateFeature<T = any, A extends SliceCaseReducers<T> = SliceCaseReducers<T>> implements IAggregate<T, A> {
    private aggregate!: AnnotatedAggregate; 
    name!: string;
    initialState!: T | (() => T);
    reducers!: ValidateSliceCaseReducers<T, A>;

    extraReducers(builder: ActionReducerMapBuilder<NoInfer<T>>): void {

    }

    constructor(protected root: AggregateRoot) {
        let aggregate = this.aggregate = createSlice(this);
    }

    
}