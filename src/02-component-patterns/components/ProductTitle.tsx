import {useContext} from "react";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard.tsx";
import {StylesProps} from "../interfaces/interfaces.ts";

export interface Props extends StylesProps {
    title?: string,
    activeClass?: string;
}

export const ProductTitle = ({ title, className, style }: Props) => {

    const { product } = useContext( ProductContext )

    return (
        <span
            className={ `${ styles.productDescription } ${ className }` }
            style={ style }
        >
            { title ? title : product.title }
        </span>
    );
}