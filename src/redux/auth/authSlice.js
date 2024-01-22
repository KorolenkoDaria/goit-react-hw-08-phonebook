import { createSlice } from "@reduxjs/toolkit";

import { registerUser, logInUser, refreshUser, logOutUser } from "./authOperations";

import { handlePending, handleRejected } from "./authAsyncHandlers";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        user: {
            name: null,
            email: null,
        },
        isLoggedIn: false,
        isRefreshing: false,
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })

            .addCase(logInUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
                state.error = null;
            })

            .addCase(refreshUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.user = payload;
                state.isRefreshing = true;
                state.isLoggedIn = true;
            })

            .addCase(logOutUser.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
                state.isRefreshing = false;
            })
            .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
            .addMatcher((action) => action.type.endsWith("/rejected"), handleRejected);
    },
    reducers: {
        clearError(state) {
            state.error = null;
        },
    },
});

export const authReducer = authSlice.reducer;

export const { clearError} = authSlice.actions;