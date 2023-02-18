import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../reducer/products.reducer";

export const appStore = configureStore({
    reducer: {
        products: productsReducer,
    },
});

export type rootStore = typeof appStore.dispatch;
export type rootState = ReturnType<typeof appStore.getState>;
