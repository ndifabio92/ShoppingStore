import {useContext} from "react";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard.tsx";
import {StylesProps} from "../interfaces/interfaces.ts";

export const ProductButtons = ({ className, style }: StylesProps) => {

    const { increaseBy, counter } = useContext( ProductContext );

    return (
        <div
            className={ `${ styles.buttonsContainer} ${ className }` }
            style={ style }
        >
            <button
                className={ styles.buttonMinus }
                onClick={ () => increaseBy( -1 ) }> - </button>

            <div className={ styles.countLabel }> { counter } </div>

            <button
                className={ styles.buttonAdd }
                onClick={ () => increaseBy( +1 ) }> + </button>
        </div>
    );
}