import { CaseReducer, CaseReducerWithPrepare, PayloadAction } from "@reduxjs/toolkit";
import { Action } from "redux";

export type AggregateFn<T, A extends Action> = A extends PayloadAction ? CaseReducerWithPrepare<T, A> : CaseReducer<T>;