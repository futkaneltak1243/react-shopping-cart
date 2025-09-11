import { Heart } from "lucide-react"

type ProductProps = {
    title: string
    description: string
    price: number
    image: string

}

const Product = ({ title, description, price, image }: ProductProps) => {
    return (
        <div className="w-[151px] h-[304px] sm:w-[223px] sm:h-[450px] bg-white shadow-[2px_1px_10px_0px_rgba(0,0,0,0.25)] relative">
            <div className="w-[22px] h-[22px] sm:w-[31px] sm:h-[31px] rounded-full bg-white
            flex justify-center items-center absolute top-[11px] right-[12px]
            cursor-pointer shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)]">
                <Heart className="h-[15px] w-[15px] sm:h-[20px] sm:w-[20px]" />
            </div>
            <div className="w-full h-[197px] sm:h-[292px]">
                <img src={image} className="object-cover w-full h-full" />
            </div>
            <div className="p-2 h-[40px] sm:h-[80px]">
                <h2 className="font-semibold text-[15px] sm:text-base leading-none">{title}</h2>
                <p className="text-gray-500 text-sm mt-2 hidden sm:block">{description}</p>

            </div>
            <p className="font-semibold mt-1 pl-2 text-[15px] sm:text-base">
                {price}
                <span className="ml-1 text-xs font-medium">$</span>
            </p>
            <button className="bg-[#A0AD7B] hover:bg-[#8f9c6b] w-[127px] h-[20px] sm:w-[188px] sm:h-[30px] text-white 
                absolute cursor-pointer bottom-3 left-1/2 -translate-x-1/2 sm:text-base text-[13px]">
                Add to cart
            </button>

        </div>
    )
}

export default Product