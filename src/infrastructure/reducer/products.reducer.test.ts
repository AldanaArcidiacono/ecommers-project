import { Product } from "../models/product";
import { actionTypes } from "./products.action.types";
import { productsReducer } from "./products.reducer";

const mockProd = {
    id: 1,
    title: "T-shirt",
    price: 45,
    description: "Cute",
    category: "Woman",
    image: "url",
    rating: {
        rate: 6,
        count: 4,
    },
};

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
