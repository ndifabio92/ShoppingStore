import {ReactElement} from "react";

export interface ProductCardProps extends StylesProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    onChange?: ( args: onChangeArgs ) => void;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product
}

export interface StylesProps {
    className?: string;
    style?: React.CSSProperties
}

export interface ProductInCart extends Product {
    count: number;
}

export interface onChangeArgs {
    product: Product;
    count: number;
}