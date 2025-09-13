import { SlidersHorizontal, X } from "lucide-react";
import { useState } from 'react'
import { useCloseOnEscape } from "../../../hooks/useCloseOnEscape";
import type { Size, Gender } from "../../../models"
import { useProducts } from "../../../contexts/products-context/useProducts";


const sizes: Size[] = ["XS", "S", "M", "L", "XL"]

interface SizeFilteProps {
    sizeFilter: Size;
    setSizeFilter: (size: Size) => void;
}

interface GenderFilterProps {
    genderFilter: Gender;
    setGenderFilter: (gender: Gender) => void;
}

const Overlay = ({ handleClose }: { handleClose: () => void }) => {
    return (
        <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={handleClose}>
        </div>
    )
}

const GenderFilter = ({ genderFilter, setGenderFilter }: GenderFilterProps) => {
    const handleClick = (gender: Gender) => {
        if (gender === genderFilter) {
            setGenderFilter("")
        } else {
            setGenderFilter(gender)
        }
    }
    return (
        <div className="mb-4">
            <h3 className="font-medium mb-2">Gender</h3>
            <div className="flex gap-2">
                <button className={"px-3 py-1 rounded w-20 " +
                    (genderFilter === "male" ? "bg-blue-950 text-white" : "bg-gray-100 hover:bg-gray-200")
                }

                    onClick={() => handleClick("male")}>
                    Male
                </button>
                <button
                    className={"px-3 py-1 rounded w-20 " +
                        (genderFilter === "female" ? "bg-blue-950 text-white" : "bg-gray-100 hover:bg-gray-200")
                    }
                    onClick={() => handleClick("female")}>
                    Female
                </button>
            </div>
        </div>
    )

}

const SizeFilter = ({ sizeFilter, setSizeFilter }: SizeFilteProps) => {

    const handleClick = (size: Size) => {
        if (size === sizeFilter) {
            setSizeFilter("");
        } else {
            setSizeFilter(size);
        }
    }

    return (
        <div>

            <h3 className="font-medium mb-2">Size</h3>
            <div className="flex gap-2 flex-wrap">
                {sizes.map(size => (
                    <button
                        key={size}
                        className={
                            "px-3 py-1 rounded w-11 " +
                            (size === sizeFilter ? "bg-blue-950 text-white" : "bg-gray-100 hover:bg-gray-200")
                        }
                        onClick={() => handleClick(size)}

                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    )
}

const DoneButton = ({ handleClose }: { handleClose: () => void }) => {
    return (
        <div className="flex justify-end mt-5">
            <button className="bg-[#A0AD7B] hover:bg-[#8f9c6b] w-20 h-9 rounded-sm cursor-pointer text-white"
                onClick={handleClose}>
                Done
            </button>
        </div>
    )
}


const Modal = ({ handleClose }: { handleClose: () => void }) => {
    useCloseOnEscape(handleClose)

    const { sizeFilter, filterProductsBySize, genderFilter, filterProductsByGender, } = useProducts()

    return (
        <>
            <Overlay handleClose={handleClose} />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-[300px] sm:w-[400px] md:w-[500px] bg-white z-50 p-4 shadow-lg">
                <button
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={handleClose}>
                    <X />
                </button>
                <h2 className="text-lg font-semibold mb-4">Filters</h2>
                <GenderFilter genderFilter={genderFilter} setGenderFilter={filterProductsByGender} />
                <SizeFilter sizeFilter={sizeFilter} setSizeFilter={filterProductsBySize} />
                <DoneButton handleClose={handleClose} />
            </div>
        </>
    );
};


const Filters = () => {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <button
                aria-label="Filters button"
                className="h-[30px] w-[30px] sm:h-[41px] sm:w-[41px] md:h-[49px] md:w-[49px] lg:h-[73px] lg:w-[73px]
          bg-white flex justify-center items-center rounded-full ml-2 md:ml-5 cursor-pointer hover:bg-gray-50"
                onClick={() => setOpened(!opened)}
            >
                <SlidersHorizontal className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
            </button>

            {opened && <Modal handleClose={() => setOpened(false)} />}
        </>
    );
};

export default Filters