import FlashSaleBig from "../smallComponents/FlashSaleBig"
import ProductCard from "../smallComponents/ProductCard"
import { ProductContextType, useProductContext } from "../../contexts/ProductContext"
import { useEffect } from "react"
import { mongoProduct } from "../../models/types"


const FlashSaleLower = () => {

    const {getAllProducts, allProducts} = useProductContext() as ProductContextType

    useEffect(() => {
      getAllProducts();
    }, [])
    
    let LowerSaleProducts: mongoProduct[] = allProducts.slice(4,8).filter(product => product.tag == "Flash Sale")
  
    return (
      <div className='_center'>
          <div className='flashsalelower _container'>
              <section className='grid'>
                {
                  LowerSaleProducts.map(products => <ProductCard key={products._id} item={products} />)
                }
                  
              </section>
              <FlashSaleBig />
          </div>
          
      </div>
    )
  }
  
  export default FlashSaleLower