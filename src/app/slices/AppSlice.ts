import {AppTypeInitialState} from "../../utils/types";
import {createSlice} from "@reduxjs/toolkit";

const initialState: AppTypeInitialState = {
    toasts: [],
    userInfo: undefined,
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
        clearToasts: (state, action) => {
            state.toasts = [];
        },
        setUserStatus: (state, action) =>{
            state.userInfo = action.payload;
        }
    },
})
export const {setToast, clearToasts, setUserStatus} = AppSlice.actions;