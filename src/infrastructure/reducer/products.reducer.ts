import { createReducer } from "@reduxjs/toolkit";
import { Product } from "../models/product";
import { loadActionCreator } from "./products.action.creator";

const initialState: Product[] = [];

export const productsReducer = createReducer(initialState, (builder) => {
    builder.addCase(loadActionCreator, (_state, action) => action.payload);
});
