import { createContext, useContext, useState } from "react";
import type { ICartProduct } from "../../models";
import type { FC, ReactNode } from "react";

export interface ICartContext {
    cartProducts: ICartProduct[];
    setCartProducts: React.Dispatch<React.SetStateAction<ICartProduct[]>>;
}

const CartContext = createContext<ICartContext | undefined>(undefined);

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCartContext must be used within a CartContextProvider");
    }
    return context;
};

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [cartProducts, setCartProducts] = useState<ICartProduct[]>([]);

    return (
        <CartContext.Provider value={{ cartProducts, setCartProducts }}>
            {children}
        </CartContext.Provider>
    );
};