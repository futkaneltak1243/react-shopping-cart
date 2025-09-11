import SearchBar from "./SearchBar"
import Filters from "./Filters"
import Product from "./Product"

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
        <div className="mt-[58px] ">
            <SearchFilters />
            <Product />
        </div>
    )
}

export default Products