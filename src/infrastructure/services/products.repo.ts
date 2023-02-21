import { Product } from "../models/product";

export class ProductsRepo {
    apiUrl: string;

    constructor() {
        this.apiUrl = "https://fakestoreapi.com/products";
    }

    getAllProducts(): Promise<Product[]> {
        return fetch(this.apiUrl).then((data) => data.json());
    }
}
