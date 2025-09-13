import { useProductsContext } from "./ProductsContextProvider"
import data from "../../data/products.json"
import { useCallback, useMemo } from "react";
import type { Size, Gender } from "../../models"

export const useProducts = () => {
    const {
        products,
        setProducts,
        sizeFilter,
        setSizeFilter,
        genderFilter,
        setGenderFilter,
        searchFilter,
        setSearchFilter
    } = useProductsContext();

    const fetchProducts = useCallback(() => {
        setProducts(data)
    }, [setProducts]);

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            return (
                (!genderFilter || product.gender === genderFilter) &&
                (!sizeFilter || product.sizes.includes(sizeFilter)) &&
                (!searchFilter || product.name.toLowerCase().includes(searchFilter.toLowerCase()))
            );
        });
    }, [products, genderFilter, sizeFilter, searchFilter]);

    const filterProductsBySearch = (key: string) => setSearchFilter(key);
    const filterProductsBySize = (size: Size) => setSizeFilter(size);
    const filterProductsByGender = (gender: Gender) => setGenderFilter(gender);

    return {
        products,
        fetchProducts,
        filteredProducts,
        filterProductsBySearch,
        sizeFilter,
        filterProductsBySize,
        genderFilter,
        filterProductsByGender,
    }
}