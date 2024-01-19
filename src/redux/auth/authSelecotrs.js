export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectError = state => state.auth.error;
export const selectisRefreshing = state => state.auth.isRefreshing;