import { useProducts } from "../../infrastructure/hooks/use.products";
import styles from "./app.module.scss";

function App() {
    // const { products } = useProducts();

    // console.log(products);

    return (
        <div className={styles.app}>
            <h2>All Products</h2>
            {/* <h2>{products[0].title}</h2> */}
        </div>
    );
}

export default App;
