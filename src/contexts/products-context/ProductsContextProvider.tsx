import { createContext, useContext, useState } from "react";
import type { FC, ReactNode } from "react";
import type { IProduct, Size, Gender } from "../../models";



export interface IProductsContext {
    products: IProduct[];
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
    sizeFilter: Size;
    setSizeFilter: React.Dispatch<React.SetStateAction<Size>>;
    genderFilter: Gender;
    setGenderFilter: React.Dispatch<React.SetStateAction<Gender>>;
    searchFilter: string;
    setSearchFilter: React.Dispatch<React.SetStateAction<string>>;
}

const ProductsContext = createContext<IProductsContext | undefined>(undefined)

export const useProductsContext = () => {
    const context = useContext(ProductsContext)
    if (context === undefined) {
        throw new Error("useProductsContext must be used within a ProductsProvider");
    }
    return context
}


export const ProductsProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [sizeFilter, setSizeFilter] = useState<Size>("")
    const [genderFilter, setGenderFilter] = useState<Gender>("")
    const [searchFilter, setSearchFilter] = useState<string>("")

    const productContextValue: IProductsContext = {
        products,
        setProducts,
        sizeFilter,
        setSizeFilter,
        genderFilter,
        setGenderFilter,
        searchFilter,
        setSearchFilter,

    };

    return (
        <ProductsContext.Provider value={productContextValue}>
            {children}
        </ProductsContext.Provider>
    );
};