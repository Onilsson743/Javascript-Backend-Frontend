
export interface product {
    category: string
    description?: string
    imageName: string
    name: string
    price: number
    rating: number
    tag: string
}

export interface productItem {
    item: product
}

export type mongoProduct = {
    _id: string
    category: string
    description?: string
    imageName: string
    name: string
    price: number
    rating: number
    tag: string
}

export type mongoProductItem = {
    item: mongoProduct
    deleteFunction: Function
}

export type adminCardType = {
    item: mongoProduct
    
}
