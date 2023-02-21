import { Product } from "../models/product";

export const mockProd: Product = {
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
