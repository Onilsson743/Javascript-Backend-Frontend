import FlashSaleBig from "../smallComponents/FlashSaleBig"
import ProductCard from "../smallComponents/ProductCard"
import Products from '../../data/products/products.json'


const FlashSaleLower = () => {

    const products = Products.slice(12,16)
  
  
    return (
      <div className='_center'>
          <div className='flashsalelower _container'>
              <section className='grid'>
                {
                  products.map(products => <ProductCard key={products.articleNumber} item={products} />)
                }
                  
              </section>
              <FlashSaleBig />
          </div>
          
      </div>
    )
  }
  
  export default FlashSaleLower