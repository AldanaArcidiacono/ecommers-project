import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockAppStore } from "../../../../core/mock.store/mock.store";
import { mockProd } from "../../mocks/mocks.products";
import ProductList from "./products.list";

describe("Given the component ProductList", () => {
    describe("When we instantiate it", () => {
        test("Then it should display the list of products", () => {
            render(
                <Provider store={mockAppStore}>
                    <ProductList item={[mockProd]} />
                </Provider>
            );
            const element = screen.getByText(/T-shirt/i);
            expect(element).toBeInTheDocument();
        });
    });
});
