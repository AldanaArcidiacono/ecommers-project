import { mockProd } from "../../mocks/mocks";
import { Product } from "../models/product";
import { actionTypes } from "./products.action.types";
import { productsReducer } from "./products.reducer";

describe("Given the productsReducer", () => {
    let action: { type: string; payload: unknown };
    let state: Product[];

    describe("When the action is LOAD", () => {
        test("Then the return state, should be the acrion payload", () => {
            action = {
                type: actionTypes.load,
                payload: [mockProd],
            };
            const result = productsReducer(state, action);
            expect(result).toBe(action.payload);
        });
    });
});
