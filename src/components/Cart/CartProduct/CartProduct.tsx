import { Trash2 } from "lucide-react"
import { Plus, Minus } from "lucide-react";

const CartProduct = () => {
    return (
        <div className=" h-[119px] w-full p-7 sm:p-0 sm:w-[397px] cart-product-custom-shadow flex items-center justify-around">
            <div className="h-[87px] flex w-full justify-between">
                <div className="flex h-full">
                    <div className="h-full w-[56px]">
                        <img src="women/18.jpg" className="h-full w-full object-cover" />
                    </div>
                    <div className="mt-1 ml-4">
                        <h3 className="font-semibold text-[16px] mb-3">Blue T-Shirt</h3>
                        <p className="text-[#AB995F] font-semibold">
                            19.99
                            <span className="text-sm ml-1">$</span>
                        </p>
                    </div>
                </div>
                <div className="flex xs:flex-row flex-col items-center justify-between w-24">
                    <button className="w-[25px] h-[25px] rounded-full bg-[#BAB0B0] flex items-center justify-center cursor-pointer hover:bg-gray-400">
                        <Plus className="w-[13px] h-[13px]" />
                    </button>
                    <p>1</p>
                    <button className="w-[25px] h-[25px] rounded-full bg-[#BAB0B0] flex items-center justify-center cursor-pointer hover:bg-gray-400">
                        <Minus className="w-[13px] h-[13px]" />
                    </button>
                </div>
                <div className="flex justify-center items-center ">
                    <button>
                        <Trash2 className="text-[#D45255] cursor-pointer" />
                    </button>
                </div>

            </div>

        </div >
    )
}

export default CartProduct