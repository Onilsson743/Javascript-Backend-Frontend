import { useEffect } from 'react'
import { ProductContextType, useProductContext } from '../../contexts/ProductContext'
import ProductCard from '../smallComponents/ProductCard'


const FeaturedProducts: React.FC = () => {

  const {getAllProducts, allProducts} = useProductContext() as ProductContextType

  useEffect(() => {
    getAllProducts();
  }, [])

  let featuredProducts = allProducts.filter(product => product.tag == "Featured")

  if (featuredProducts.length > 8) {
    featuredProducts = featuredProducts.slice(0,8)
  }

  return (
    <section className='featured-products'>
        <h4>Featured Products</h4>
        <div className='grid'>
          {
            featuredProducts.map(products => <ProductCard key={products._id} item={products} />)
          }
        </div>
    </section>
  )
}

export default FeaturedProducts