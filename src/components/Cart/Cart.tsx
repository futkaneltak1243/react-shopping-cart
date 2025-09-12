import { ShoppingCart, X } from "lucide-react"
import { useState } from "react"
import { useCloseOnEscape } from "../../hooks/useCloseOnEscape";
import CartProduct from "./CartProduct";


const Products = () => {
    return (
        <div className="w-full flex flex-col items-center  justify-center ">
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />

            <CartProduct />

            <CartProduct />

        </div>
    )
}

const CheckoutArea = () => {
    return (
        <div className="h-[200px] w-full px-5 flex flex-col shadow-[0_0px_6px_1px_rgba(0,0,0,0.25)] ">
            <div className="flex justify-between items-center flex-1 w-full">
                <p className="text-gray-500">SUBTOTAL</p>
                <p className="font-semibold text-[#AB995F] text-2xl">
                    1859
                    <span>$</span>
                </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
                <button className="w-full h-11 bg-[#A0AD7B] cursor-pointer text-[20px] tracking-widest hover:bg-[#8f9c6b]">
                    CHECKOUT
                </button>
            </div>

        </div>
    )
}


const CartProductsHead = () => {
    return (
        <div className="h-[143px] w-full  flex items-center justify-center">
            <ShoppingCart className="h-[34px] w-[38px]" />
            <h1 className="text-[36px] ml-6 font-semibold">
                Cart
            </h1>

        </div>
    )

}


const CloseButton = ({ handleClose }: { handleClose: () => void }) => {
    return (
        <button className="absolute top-4 left-4 flex w-7 h-7 items-center justify-center cursor-pointer"
            onClick={handleClose}
        >
            <X />
        </button>
    )
}

const CartProducts = ({ opened, handleClose }: { opened: boolean; handleClose: () => void }) => {
    useCloseOnEscape(handleClose)
    return (
        <div
            className={
                "sm:w-[440px] h-screen flex flex-col  fixed top-0 right-0 bg-[#FBF0F0] z-50 shadow-[-4px_0px_5px_0px_rgba(0,0,0,0.25)] transform transition-transform duration-300 " +
                (opened ? "sm:translate-x-0 w-full" : "sm:translate-x-[440px] hidden")
            }
        >
            <CloseButton handleClose={handleClose} />
            <CartProductsHead />
            <div className="flex-1 overflow-y-auto min-h-0">
                <Products />
            </div>
            <CheckoutArea />


        </div>
    )
}




const Cart = () => {
    const [opened, setOpened] = useState(false)

    return (
        <>
            <CartProducts opened={opened} handleClose={() => setOpened(false)} />
            <div className="fixed top-0 right-0 z-30 w-15 h-15 bg-black flex items-center justify-center cursor-pointer"
                onClick={() => setOpened(!opened)}>
                <ShoppingCart color="white" size={30} />
            </div>
        </>
    )
}

export default Cart