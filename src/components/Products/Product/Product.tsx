import { Heart } from "lucide-react"

type ProductProps = {
    title: string
    description: string
    price: number
    image: string

}

const Product = ({ title, description, price, image }: ProductProps) => {
    return (
        <div className="w-[223px] h-[450px] bg-white shadow-[2px_1px_10px_0px_rgba(0,0,0,0.25)] relative">
            <div className="w-[31px] h-[31px] rounded-full bg-white
            flex justify-center items-center absolute top-[11px] right-[12px]
            cursor-pointer shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)]">
                <Heart className="h-[20px] w-[20px]" />
            </div>
            <div className="w-full h-[292px]">
                <img src={image} className="object-cover w-full h-full" />
            </div>
            <div className="p-2 h-[80px]">
                <h2 className="font-semibold">{title}</h2>
                <p className="text-gray-500 text-sm mt-2">{description}</p>

            </div>
            <p className="font-semibold mt-1 pl-2">
                {price}
                <span className="ml-1 text-xs font-medium">$</span>
            </p>
            <button className="bg-[#A0AD7B] hover:bg-[#8f9c6b] w-[188px] h-[30px] text-white 
                absolute cursor-pointer bottom-3 left-1/2 -translate-x-1/2">
                Add to cart
            </button>

        </div>
    )
}

export default Product