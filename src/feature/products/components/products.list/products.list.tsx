import { useProducts } from "../../hooks/use.products";
import ProductItem from "../product.item/product.item";

export default function ProductList() {
    const { products } = useProducts();

    return (
        <>
            <h2>All Products</h2>
            <ul>
                {products.map((item) => (
                    <li key={item.id}>
                        <ProductItem item={item}></ProductItem>
                    </li>
                ))}
            </ul>
        </>
    );
}
