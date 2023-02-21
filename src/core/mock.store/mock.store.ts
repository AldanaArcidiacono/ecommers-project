import { configureStore } from "@reduxjs/toolkit";
import { mockProd } from "../../feature/products/mocks/mocks.products";
import { productsReducer } from "../../feature/products/reducer/products.reducer";
import { rootState } from "../store/store";

export const preloadedState: Partial<rootState> = {
    products: [mockProd],
};

export const mockAppStore = configureStore({
    reducer: {
        products: productsReducer,
    },
    preloadedState,
});
