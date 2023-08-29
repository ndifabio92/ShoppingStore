import {useContext} from "react";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard.tsx";
import {StylesProps} from "../interfaces/interfaces.ts";

export interface Props extends StylesProps {
    img?: string;
}
export const ProductImage = ({ img, className, style }: Props ) => {
    const { product } = useContext( ProductContext );
    let imgToShow: string;

    if ( img ) {
        imgToShow = img;
    } else if ( product.img ) {
        imgToShow = product.img
    } else {
        imgToShow = noImage;
    }


    return (
        <img
            className={ `${ styles.productImg } ${ className }` }
            src={ imgToShow }
            style={ style }
            alt="Product"
        />
    );
}