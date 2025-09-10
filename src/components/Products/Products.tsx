import SearchBar from "./SearchBar"

const SearchFilters = () => {
    return (
        <div className="flex">
            <SearchBar />
        </div>
    )
}

const Products = () => {
    return (
        <SearchFilters />
    )
}

export default Products