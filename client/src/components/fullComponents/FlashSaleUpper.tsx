import FlashSaleBig from "../smallComponents/FlashSaleBig"
import Products from '../../data/products/products.json'
import ProductCard from "../smallComponents/ProductCard"

const FlashSaleUpper = () => {

    const products = Products.slice(8,12)
  
    return (
      <div className='_center'>
          <div className='_container flashsaleupper'>
              <FlashSaleBig />
              <section className='grid'>
                {
                  products.map(products => <ProductCard key={products.articleNumber} item={products} />) 
                }
              </section>
          </div>
      </div>
    )
  }
  
  export default FlashSaleUpper