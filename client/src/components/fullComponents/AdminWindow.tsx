import React, { ChangeEvent, useEffect, useState } from 'react'
import AdminProductCard from '../smallComponents/AdminProductCard';
import { ProductContextType, useProductContext } from '../../contexts/ProductContext';
import AdminProductCardSmall from '../smallComponents/AdminProductCardSmall';
import AddProduct from './AddProduct';
import ProductCard from '../smallComponents/ProductCard';




const AdminWindow: React.FC = () => {

    const { allProducts, getAllProducts, refetch, deleteProduct } = useProductContext() as ProductContextType
    const [viewType, setViewType] = useState(true)
    const [search, setSearch] = useState<string>("")
  
    useEffect(() => {   
        getAllProducts(search)
    }, [refetch, viewType, search])

   

    return (
        <div className='adminwindow'>
            <div className='split-fields'>
                <h1>Products</h1>
                <AddProduct />
            </div>
            <div className='split-fields'>
                <span>
                    <input type="text" placeholder='Saerch Product By Tag' value={search} onChange={(event: ChangeEvent<HTMLInputElement>) =>  setSearch(event.target.value)}/>
                </span>
                
                <span>
                    <button onClick={() => setViewType(true)}>List</button>
                    <button onClick={() => setViewType(false)}>Full Product Cards</button>
                </span>
            </div>
            <div>
                {viewType ? 
                    <div className='productlistview'> 
                        <div className='description-bar'>
                            <span className='description-box'>
                                <p>Image</p>
                            </span>
                            <span className='description-box'>
                                <p>Name</p>
                            </span>
                            <span className='description-box'>
                                <p>Category</p>
                            </span>
                            <span className='description-box'>
                                <p>Tag</p>
                            </span>
                            <span className='description-box'>
                                <p>Rating (0-5)</p>
                            </span>
                            <span className='description-box'>
                                <p>Price</p>
                            </span>
                            <span className='description-box-last'>
                                <p>Modify</p>
                            </span>

                        </div>
                        {
                           allProducts.map(product => <AdminProductCardSmall key={product._id} item={product} deleteFunction={deleteProduct}/>) 
                        }
                    </div>
                    :
                    <div className='productcardview'>
                        {
                            allProducts.map(product => <ProductCard key={product._id} item={product}/>)
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default AdminWindow