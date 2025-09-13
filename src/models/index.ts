export interface IProduct {
    id: number,
    name: string,
    description: string,
    price: number,
    sizes: string[],
    gender: string,
    image: string,
}

export interface ICartProduct extends IProduct {
    quantity: number;
}

export type Size = "" | "XS" | "S" | "M" | "L" | "XL"

export type Gender = "" | "male" | "female"