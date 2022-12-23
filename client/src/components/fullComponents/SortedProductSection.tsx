import { useEffect } from 'react'
import { ProductContextType, useProductContext } from '../../contexts/ProductContext'
import Products from '../../data/products/products.json'
import ProductCardHorizontal from '../smallComponents/ProductCardHorizontal'

const SortedProductsSection = () => {

    const {getAllProducts, allProducts} = useProductContext() as ProductContextType

    useEffect(() => {
      getAllProducts();
    }, [])
  
    let latestProducts = allProducts.filter(product => product.tag == "Latest Product")
    if (latestProducts.length > 3) {
      latestProducts = latestProducts.slice(0,3)
    }

    let bestSellingProducts = allProducts.filter(product => product.tag == "Best Selling Products")
    if (bestSellingProducts.length > 3) {
      bestSellingProducts = bestSellingProducts.slice(0,3)
    }

    let topRatedProducts = allProducts.filter(product => product.tag == "Top Rated Products")
    if (topRatedProducts.length > 3) {
      topRatedProducts = topRatedProducts.slice(0,3)
    }

    return (
        <div className='_center'>
            <div className='_containersmall sortedproductsection'>
                <div className='row'>
                    <h4>Latest Products</h4>
                    {
                        latestProducts.map(latestProducts => <ProductCardHorizontal key={latestProducts._id} item={latestProducts} />)
                    }
                    
                </div>
                <div className='row'>
                    <h4>Best Selling Products</h4>
                    {
                        bestSellingProducts.map(bestSellingProducts => <ProductCardHorizontal key={bestSellingProducts._id} item={bestSellingProducts} />)
                    }
                    
                </div>
                <div className='row'>
                    <h4>Top Rated Products</h4>
                    {
                        topRatedProducts.map(topReactedProducts => <ProductCardHorizontal key={topReactedProducts._id} item={topReactedProducts} />)
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default SortedProductsSection