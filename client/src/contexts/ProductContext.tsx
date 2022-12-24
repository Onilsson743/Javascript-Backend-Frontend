import { useContext, useState, createContext } from 'react'
import axios from 'axios';
import { mongoProduct } from '../models/types';



export interface ProductContextType {
    refetch: Boolean
    setRefetch: Function
    product: mongoProduct
    allProducts: mongoProduct[]
    featuredProducts: mongoProduct[]
    getAllProducts: Function
    getProductsByTag: Function
    getProductById: Function
    deleteProduct: Function
}



export const ProductContext = createContext<ProductContextType | null>(null);

export const useProductContext = () => { return useContext(ProductContext) }

export const ProductProvider = ({children}: any) => {


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
    const [product, setProduct] = useState<mongoProduct>(empty_product)
    const [allProducts, setAllProducts] = useState<mongoProduct []>([])
    const [featuredProducts, setFeaturedProducts] = useState<mongoProduct []>([])

    // Fetch all products
    const getAllProducts = async (search: string | undefined) => {
        try {
            const response = await axios.get('http://localhost:5000/api/products')
            const data: mongoProduct[] = response.data
            if (search) {
                setAllProducts(data.filter(product => product.tag.toLowerCase().includes(search.toLowerCase())))
            } else {
                setAllProducts(data)
            }            
        } catch (error) {
            console.log(error)
        }
    }

    // Fetch Product with Tag
    const getProductsByTag = async (tag: string) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/products/tag/${tag}`)
            setFeaturedProducts(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    // Fetch product with ID
    const getProductById = async (id: string) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/products/id/${id}`)
            setProduct(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    // Delete Product
    const deleteProduct = async (item: mongoProduct) => {
        try {
            const {data} = await axios.post('http://localhost:5000/api/admin/deleteproduct', {
                item
            })
            console.log(data)
            setRefetch(!refetch)

        } catch (error) {
            console.log(error)
        }
    }


    return <ProductContext.Provider value={{refetch, setRefetch, product, allProducts, featuredProducts, getAllProducts, getProductsByTag, getProductById, deleteProduct }}>
        {children}
    </ProductContext.Provider>

}