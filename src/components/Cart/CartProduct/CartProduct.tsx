import { Trash2 } from "lucide-react"
import { Plus, Minus } from "lucide-react";
import type { ICartProduct } from "../../../models";
import { useCart } from "../../../contexts/cart-context/useCart";


const CartProduct = ({ cartProduct }: { cartProduct: ICartProduct }) => {
    const {
        increaseProductQuantityByOne,
        decreaseProductQuantityByOne,
        removeProduct,
    } = useCart()

    const isOne = cartProduct.quantity === 1

    return (
        <div className=" h-[119px] w-full p-7 sm:p-0 sm:w-[397px] cart-product-custom-shadow flex items-center justify-around">
            <div className="h-[87px] flex w-full justify-between">
                <div className="flex flex-1 h-full">
                    <div className="h-full w-[56px]">
                        <img src={cartProduct.image} className="h-full w-full object-cover" />
                    </div>
                    <div className="mt-1 ml-4">
                        <h3 className="font-semibold text-[16px] mb-3">
                            {cartProduct.name}
                        </h3>
                        <p className="text-[#AB995F] font-semibold">
                            {cartProduct.price}
                            <span className="text-sm ml-1">$</span>
                        </p>
                    </div>
                </div>
                <div className="flex xs:flex-row flex-col items-center justify-between w-24">
                    <button className="w-[25px] h-[25px] rounded-full bg-[#BAB0B0] flex items-center justify-center cursor-pointer hover:bg-gray-400"
                        onClick={() => increaseProductQuantityByOne(cartProduct)}>
                        <Plus className="w-[13px] h-[13px]" />
                    </button>
                    <p>{cartProduct.quantity}</p>
                    <button className={"w-[25px] h-[25px] rounded-full  flex items-center justify-center cursor-pointer  " +
                        (isOne ? "bg-gray-200" : "bg-[#BAB0B0] hover:bg-gray-400")
                    }
                        onClick={() => decreaseProductQuantityByOne(cartProduct)}
                        disabled={isOne}>
                        <Minus className={"w-[13px] h-[13px] " + (isOne ? "text-gray-300" : "text-black")} />
                    </button>
                </div>
                <div className="flex justify-center items-center xs:ml-4">
                    <button onClick={() => removeProduct(cartProduct)}>
                        <Trash2 className="text-[#D45255] cursor-pointer" />
                    </button>
                </div>

            </div>

        </div >
    )
}

export default CartProduct