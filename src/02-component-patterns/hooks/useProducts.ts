import {useState} from "react";
import {onChangeArgs, Product} from "../interfaces/interfaces.ts";
interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void
}

export const useProducts = ({ onChange, product }: useProductArgs) => {
    const [counter, setCounter] = useState(0);
    const increaseBy = ( value: number) => {
        const newValue = Math.max(counter+ value, 0);
        setCounter(newValue)
        onChange && onChange({ count: newValue, product });
    }

    return {
        counter,
        increaseBy
    }
}