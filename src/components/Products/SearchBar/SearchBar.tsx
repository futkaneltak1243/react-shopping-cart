import { Search } from 'lucide-react';


const SearchInput = () => {
    return (
        <input type="text" placeholder="Search..." className="lg:w-[587px] lg:h-[73px] w-[240px] h-[30px] bg-white pl-4 focus:outline-none" />
    )
}

const SearchButton = () => {
    return (
        <button className="bg-[#A0AD7B] w-[50px] h-[30px] lg:w-[122px] lg:h-[73px] flex justify-center items-center">
            <Search size={30} />
        </button>
    )
}

const SearchBar = () => {
    return (
        <div className="flex">
            <SearchInput />
            <SearchButton />
        </div>
    )
}
export default SearchBar