import ProductList from "../../../../feature/products/components/products.list/products.list";
import { useProducts } from "../../../../feature/products/hooks/use.products";

export default function Home() {
    const { products } = useProducts();

    return (
    <ProductList item={products}/>
    );
}
