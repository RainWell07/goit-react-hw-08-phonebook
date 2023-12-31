export const selectContacts = state => state.contacts.items;
export const selectStatusFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectUser = state => state.auth.user;
export const selectIsFetching = state => state.auth.isFetching;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;