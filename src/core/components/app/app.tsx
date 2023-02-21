import ProductList from "../../../feature/products/components/products.list/products.list";
import styles from "./app.module.scss";

function App() {
    return (
        <div className={styles.app}>
            <ProductList />
        </div>
    );
}

export default App;
