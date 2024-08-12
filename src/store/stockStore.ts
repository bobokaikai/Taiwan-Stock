import { configureStore } from "@reduxjs/toolkit";
import stockSlice from "@/slice/stockSlice";
import { stockApi } from "@/features/apiSlice";

export const stockStore=configureStore({
    reducer:{
        [stockApi.reducerPath]:stockApi.reducer,
        stock:stockSlice
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(stockApi.middleware)
})

export type RootState=ReturnType<typeof stockStore.getState>
export type AppDispatch=typeof stockStore.dispatch
