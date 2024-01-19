import { createSlice} from "@reduxjs/toolkit";

import { registerUser, logInUser, refreshUser, logOutUser } from "./authOperations";

import { handlePending, handleRejected } from "./authAsyncHandlers";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        user: {
            name: null,
            email: null
        },
        isLoggedIn: false,
        isRefreshing: false,
        isLoading: false,
        error: null,
    },
    extraReducers: builder => {
        builder
            .addCase(registerUser.pending, state => {
                state.isLoggedIn = true;
             })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logInUser.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })
            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state, { payload }) => {
                state.isRefreshing = false;
            })
            .addCase(logOutUser.fulfilled, state => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addMatcher((action) => { action.type.endsWith('/pending') }, handlePending)
            .addMatcher((action) => { action.type.endsWith('/rejected') }, handleRejected)
            .addMatcher((action) =>{action.type.endsWith('/fulfilled')}, handleRejected)
            
    }


})

export const authReducer = authSlice.reducer;