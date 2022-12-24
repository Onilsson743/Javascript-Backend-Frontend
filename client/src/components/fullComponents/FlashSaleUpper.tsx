import { useEffect } from "react"
import { ProductContextType, useProductContext } from "../../contexts/ProductContext"
import FlashSaleBig from "../smallComponents/FlashSaleBig"
import ProductCard from "../smallComponents/ProductCard"

const FlashSaleUpper = () => {

  const {getAllProducts, allProducts} = useProductContext() as ProductContextType

  useEffect(() => {
    getAllProducts();
  }, [])

  let UpperSaleProducts = allProducts.filter(product => product.tag == "Flash Sale")

  if (UpperSaleProducts.length > 4) {
    UpperSaleProducts = UpperSaleProducts.slice(0,4)
  }

  
  
    return (
      <div className='_center'>
          <div className='_container flashsaleupper'>
              <FlashSaleBig />
              <section className='grid'>
                {
                  UpperSaleProducts.map(products => <ProductCard key={products._id} item={products} />) 
                }
              </section>
          </div>
      </div>
    )
  }
  
  export default FlashSaleUpper