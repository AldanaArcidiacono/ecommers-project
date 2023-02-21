import { Product } from "../../models/product";
import ProductItem from "../product.item/product.item";

export default function ProductList({ item }: { item: Product[] }) {
    return (
        <>
            <h2>All Products</h2>
            <ul>
                {item.map((item) => (
                    <li key={item.id}>
                        <ProductItem item={item}></ProductItem>
                    </li>
                ))}
            </ul>
        </>
    );
}
