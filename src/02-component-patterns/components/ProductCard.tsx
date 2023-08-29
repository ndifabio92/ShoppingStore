import styles from '../styles/styles.module.css';
import {useProducts} from "../hooks/useProducts.ts";
import {createContext} from "react";
import {ProductContextProps, ProductCardProps} from "../interfaces/interfaces.ts";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider} = ProductContext;

export const ProductCard = ({ children, product, className, style }: ProductCardProps) => {
    const {increaseBy, counter} = useProducts();
    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div
                className={ `${ styles.productCard } ${ className }` }
                style={ style }
            >
                { children }
            </div>
        </Provider>
    )
}