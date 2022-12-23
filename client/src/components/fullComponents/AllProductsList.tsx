import axios from 'axios'
import { useEffect, useState } from 'react';
import AdminProductCard from '../smallComponents/AdminProductCard';
import { mongoProduct } from '../../models/types';
import { ProductContextType, useProductContext } from '../../contexts/ProductContext';



const AllProductsList = () => {

    const { allProducts, getAllProducts, refetch, deleteProduct } = useProductContext() as ProductContextType
    
    useEffect(() => {
        getAllProducts()
    }, [refetch])

  return (
    <div>
        
        <div className='Allproductlist _container _center'>
            
            {
                allProducts.map(allProducts => <AdminProductCard key={allProducts._id} item={allProducts} deleteFunction={deleteProduct} />)
            }        
        </div>
    </div>
  )
}

export default AllProductsList