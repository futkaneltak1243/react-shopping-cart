import { useCartContext } from "./CartContextProvider";
import type { IProduct, ICartProduct } from "../../models";
import { useMemo } from "react";


export const useCart = () => {
    const { cartProducts, setCartProducts } = useCartContext()

    const increaseProductQuantityByOne = (cartProduct: ICartProduct) => {
        setCartProducts((prev: ICartProduct[]) =>
            prev.map(product =>
                product.id === cartProduct.id ? { ...product, quantity: product.quantity + 1 } : product
            )
        );
    }

    const decreaseProductQuantityByOne = (cartProduct: ICartProduct) => {
        setCartProducts((prev: ICartProduct[]) =>
            prev.map(product =>
                product.id === cartProduct.id && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
            )
        );
    }

    const addProduct = (product: IProduct) => {
        const existingProduct = cartProducts.find(cartProduct => cartProduct.id === product.id);

        if (existingProduct) {
            increaseProductQuantityByOne(existingProduct);
        } else {
            setCartProducts((prev: ICartProduct[]) => [...prev, { ...product, quantity: 1 }]);
        }
    }

    const removeProduct = (cartProduct: ICartProduct) => {
        setCartProducts((prev: ICartProduct[]) => prev.filter(product => product.id !== cartProduct.id));
    }

    const totalProducts = useMemo(() => {
        return cartProducts.reduce((sum: number, product: ICartProduct) => sum + product.quantity, 0)
    }, [cartProducts])

    const total = useMemo(() => {
        return cartProducts.reduce((sum, product) => sum + product.quantity * product.price, 0)
    }, [cartProducts])

    return {
        cartProducts,
        increaseProductQuantityByOne,
        decreaseProductQuantityByOne,
        addProduct,
        removeProduct,
        totalProducts,
        total,
    }

}