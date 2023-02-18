import { createAction } from "@reduxjs/toolkit";
import { Product } from "../models/product";
import { actionTypes } from "./products.action.types";

export const loadActionCreator = createAction<Product[]>(actionTypes.load);
