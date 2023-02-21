/* eslint-disable testing-library/no-render-in-setup */
import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { appStore } from "../../../core/store/store";
import { mockProd } from "../mocks/mocks.products";
import { Product } from "../models/product";
import { ProductsRepo } from "../services/products.repo";
import { useProducts } from "./use.products";

jest.mock("../services/products.repo");

describe("Given the hook useProducts", () => {
    let result: {
        current: {
            products: Product[];
        };
    };

    beforeEach(() => {
        ProductsRepo.prototype.getAllProducts = jest
            .fn()
            .mockResolvedValue([mockProd]);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );

        ({ result } = renderHook(() => useProducts(), { wrapper }));
    });

    test("should first", () => {
        expect(result.current.products).toStrictEqual([mockProd]);
    });
});
