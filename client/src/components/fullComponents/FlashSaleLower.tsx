import FlashSaleBig from "../smallComponents/FlashSaleBig"
import ProductCard from "../smallComponents/ProductCard"
import Products from '../../data/products/products.json'
import { ProductContextType, useProductContext } from "../../contexts/ProductContext"
import { useEffect } from "react"


const FlashSaleLower = () => {

  const {getAllProducts, allProducts} = useProductContext() as ProductContextType

  useEffect(() => {
    getAllProducts();
  }, [])

  let LowerSaleProducts = allProducts.filter(product => product.tag == "Flash Sale")

  if (LowerSaleProducts.length > 4) {
    LowerSaleProducts = LowerSaleProducts.slice(0,4)
  }

    const products = Products.slice(12,16)
  
  
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