import { createSlice } from "@reduxjs/toolkit";
import { AuthenticationState } from "../contracts";

const initialState: AuthenticationState = {
    detail: null
};

export const authentication = createSlice({
    name: "auth",
    initialState,
    reducers: {

    }
});