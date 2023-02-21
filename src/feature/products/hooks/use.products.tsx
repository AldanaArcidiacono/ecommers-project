import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../../core/store/store";
import { loadActionCreator } from "../reducer/products.action.creator";
import { ProductsRepo } from "../services/products.repo";

export const useProducts = () => {
    const products = useSelector((state: rootState) => state.products);
    const dispatcher = useDispatch();
    const apiProducts = useMemo(() => new ProductsRepo(), []);

    useEffect(() => {
        apiProducts
            .getAllProducts()
            .then((products) => dispatcher(loadActionCreator(products)));
    }, [apiProducts, dispatcher]);

    return {
        products,
    };
};
