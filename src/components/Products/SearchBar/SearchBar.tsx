import { Search } from "lucide-react";
import { useState } from "react";
import { useProducts } from "../../../contexts/products-context/useProducts";

interface SearchInputProps {
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleEnterKey: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    value: string;
}

interface SearchButtonProps {
    handleClick: () => void;
}

const SearchInput = ({ handleInputChange, handleEnterKey, value }: SearchInputProps) => {

    return (
        <input
            type="text"
            placeholder="Search..."
            aria-label="Search input"
            className="w-[240px] h-[30px] sm:w-[326px] sm:h-[41px] md:w-[390px] md:h-[49px] lg:w-[587px] lg:h-[73px] 
                 bg-white pl-4 focus:outline-none text-sm lg:text-lg
                 placeholder:text-sm lg:placeholder:text-lg"
            onChange={handleInputChange}
            value={value}
            onKeyDown={handleEnterKey}
        />
    );
};

const SearchButton = ({ handleClick }: SearchButtonProps) => {

    return (
        <button
            aria-label="Search button"
            className="flex justify-center items-center bg-[#A0AD7B] cursor-pointer
                 w-[50px] h-[30px] sm:w-[68px] sm:h-[41px] 
                 md:w-[82px] md:h-[49px] lg:w-[122px] lg:h-[73px]
                 hover:bg-[#8f9c6b] transition-colors duration-200
                 "
            onClick={handleClick}
        >
            <Search className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
        </button>
    );
};

const SearchBar = () => {
    const [searchKey, setSearchKey] = useState<string>("")
    const { filterProductsBySearch } = useProducts()
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const search = event.target.value
        setSearchKey(search)
        if (!search) {
            filterProductsBySearch("")
        }
    }
    const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            filterProductsBySearch(searchKey)
        }
    }
    return (
        <div className="flex items-center">
            <SearchInput handleInputChange={handleInputChange} handleEnterKey={handleEnterKey} value={searchKey} />
            <SearchButton handleClick={() => filterProductsBySearch(searchKey)} />
        </div>
    );
};

export default SearchBar;
