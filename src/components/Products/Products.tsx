import SearchBar from "./SearchBar"
import Filters from "./Filters"
import Product from "./Product"
import data from "../data/products.json"

const SearchFilters = () => {
    return (
        <div className="flex items-center w-full justify-center">
            <SearchBar />
            <Filters />
        </div>
    )
}

const Products = () => {
    return (
        <div className="mt-[58px] mb-10">
            <SearchFilters />
            <div className="flex justify-center items-center mt-[74px]">
                <div className="grid grid-cols-5 gap-4">
                    {data.map(product => <Product title={product.name} description={product.description} price={product.price} image={product.image}></Product>)}
                </div>
            </div>

        </div>
    )
}

export default Products