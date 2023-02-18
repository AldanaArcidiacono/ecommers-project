import { mockProd } from "../../mocks/mocks";
import { Product } from "../models/product";
import { EcommerceRepo } from "./ecommerce.repo";
import { Repo } from "./repo";

describe("Given the EcommerceRepo", () => {
    let service: Repo<Product> = new EcommerceRepo();

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
