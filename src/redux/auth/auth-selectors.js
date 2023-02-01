export const selectToken = state => state.auth.token;
export const selectName = state => state.auth.user.name;
export const selectIsLoading = state => state.auth.isLoading;
export const selectIsFetchCurrentUser = state => state.auth.isFetchCurrentUser;
