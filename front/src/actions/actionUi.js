import { types } from "../types";

export const setLoading = (isLoading=true) => ({
    type: types.loadingPage,
    payload: isLoading,
})
export const setSimplAlert = ( viewAlert=true ) => ({
    type: types.simpleAlert,
    payload: viewAlert,
})