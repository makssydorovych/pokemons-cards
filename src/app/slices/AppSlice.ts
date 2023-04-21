import {AppTypeInitialState} from "../../utils/types";
import {createSlice} from "@reduxjs/toolkit";

const initialState: AppTypeInitialState = {
    toasts: [],
};
export const AppSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setToast: (state, action) => {
            const toasts = [...state.toasts];
            toasts.push(action.payload);
            state.toasts = toasts;
        },
        clearToasts: (state,action)=>{
            state.toasts = [];
        }
    },
})
export const {setToast, clearToasts} = AppSlice.actions;