import { Product } from "../../models/product";
import ProductItem from "../product.item/product.item";
import { StyledProductList } from "../styles/products.list.styled";

export default function ProductList({ item }: { item: Product[] }) {
    return (
        <>
            <h2>All Products</h2>
            <StyledProductList>
                {item.map((item) => (
                    <li key={item.id}>
                        <ProductItem item={item}></ProductItem>
                    </li>
                ))}
            </StyledProductList>
        </>
    );
}
