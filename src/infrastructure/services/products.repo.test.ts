import { mockProd } from "../../mocks/mocks";
import { Product } from "../models/product";
import { ProductsRepo } from "./products.repo";
import { Repo } from "./repo";

describe("Given the ProductsRepo", () => {
    let service: Repo<Product> = new ProductsRepo();

    describe("When we instantiate GETALLPRODUCTS", () => {
        test("Then it should return all the products", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([mockProd]),
            });
            await service.getAllProducts();
            expect(fetch).toHaveBeenCalled();
        });
    });
});
