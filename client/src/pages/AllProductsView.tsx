import Breadcrumb from '../components/fullComponents/Breadcrumb'
import Navbar from '../components/fullComponents/Navbar'
import ProductCard from '../components/smallComponents/ProductCard'
import { useProductContext, ProductContextType } from '../contexts/ProductContext'
import { useEffect } from 'react'

const AllProductsView: React.FC = () => {

  const { allProducts, getAllProducts } = useProductContext() as ProductContextType

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
        <Navbar />
        <Breadcrumb />
        <div className='_container grid'>
          {
            allProducts.map(products => <ProductCard key={products._id} item={products} />)
          }
        </div>
        
        
    </>
  )
}

export default AllProductsView