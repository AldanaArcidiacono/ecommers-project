import { Product } from "../../models/product";

export default function ProductItem({ item }: { item: Product }) {
    return (
        <>
            <p>{item.title}</p>
            <img src={item.image} alt={item.title} width={200} />
        </>
    );
}
