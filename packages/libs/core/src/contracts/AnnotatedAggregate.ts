import { CaseReducer, Slice, SliceCaseReducers } from "@reduxjs/toolkit";

export interface AnnotatedAggregate<T = any, A extends SliceCaseReducers<T> = SliceCaseReducers<T>> extends Slice<T, A> {    
}