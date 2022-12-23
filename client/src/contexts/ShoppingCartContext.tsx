import { useContext, useState, createContext } from 'react'
import axios from 'axios';
import { mongoProduct } from '../models/types';



export interface ShoppingCartType {
    refetch: Boolean
    setRefetch: Function
    addProductToCart: Function
    addProductToFavourites: Function
    shoppingCart: mongoProduct[]
    favouriteList: mongoProduct[]
    
}



export const ShoppingCartContext = createContext<ShoppingCartType | null>(null);

export const useShoppingCartContext = () => { return useContext(ShoppingCartContext) }

export const ShoppingCartProvider = ({children}: any) => {


    const empty_product: mongoProduct = {
        _id: "",
        category: "",
        description: "",
        imageName: "",
        name: "",
        price: 0,
        rating: 0,
        tag: ""

    }

    const url = "http://localhost:5000/api/products"
    const [refetch, setRefetch] = useState(true)
    const [shoppingCart, setShoppingCart] = useState<mongoProduct[]>([])
    const [favouriteList, setFavouriteList] = useState<mongoProduct[]>([])


    // Add product to shoppingcart
    const addProductToCart = (item: mongoProduct) => {

        if (shoppingCart.includes(item)) {
            console.log("That product already exists in you shoppingcart")
        } else {
            setShoppingCart(shoppingCart => [...shoppingCart, item])
        }
    } 
    // Add product to Favourites
    const addProductToFavourites = (item: mongoProduct) => {
        if (favouriteList.includes(item)) {
            console.log("Tht item already exists in your favourite list")
        } else {
            setFavouriteList(favouriteList => [...favouriteList, item])
        }
       
    } 

    


    return <ShoppingCartContext.Provider value={{refetch, setRefetch, addProductToCart, shoppingCart, addProductToFavourites, favouriteList}}>
        {children}
    </ShoppingCartContext.Provider>

}