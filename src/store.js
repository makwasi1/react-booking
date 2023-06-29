//file to store all our states
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { apiSclice } from "./slices/apiSclice";

const store = configureStore({
    reducer: {
        [apiSclice.reducerPath]: apiSclice.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSclice.middleware),
    devTools: true,
});

export default store;