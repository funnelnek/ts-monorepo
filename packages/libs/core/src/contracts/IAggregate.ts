import { CreateSliceOptions, SliceCaseReducers } from "@reduxjs/toolkit";

export interface IAggregate<T = any, A extends SliceCaseReducers<T> = SliceCaseReducers<T>> extends CreateSliceOptions<T, A> {    
}