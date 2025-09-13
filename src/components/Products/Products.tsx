import SearchBar from "./SearchBar"
import Filters from "./Filters"
import Product from "./Product"
import { useProducts } from "../../contexts/products-context/useProducts"
import { useEffect } from "react"

const SearchFilters = () => {
    return (
        <div className="flex items-center w-full justify-center">
            <SearchBar />
            <Filters />
        </div>
    )
}

const Products = () => {
    const { fetchProducts, filteredProducts } = useProducts()
    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])
    return (
        <section className="mt-[58px] mb-10">
            <SearchFilters />
            <div className="flex justify-center items-center mt-[74px]">
                <div className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                    {filteredProducts.map(product => <Product key={product.id} title={product.name} description={product.description} price={product.price} image={product.image}></Product>)}
                </div>
            </div>

        </section>
    )
}

export default Products