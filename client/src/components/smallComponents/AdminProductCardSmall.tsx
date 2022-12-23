import React from 'react'
import { mongoProductItem } from '../../models/types'
import AddOrModifyProduct from './UpdateProduct'

const AdminProductCardSmall:React.FC<mongoProductItem> = ({item, deleteFunction}) => {

   

    return (
        <div className='adminproductcardsmall'>
            <span className='productobjectbox'>
                <img src={item.imageName} alt='Product Image' />
            </span>
            <span className='productobjectbox'>
                <p>{item.name}</p>
            </span>
            <span className='productobjectbox'>
                <p>{item.category}</p>
            </span>
            <span className='productobjectbox'>
                <p>{item.tag}</p>
            </span>
            <span className='productobjectbox'>
                <p>{item.rating}</p>
            </span>
            <span className='productobjectbox'>
                <p>{item.price}</p>
            </span>    
            <span className='options'>
                <AddOrModifyProduct item={item} />
                <button className='delete-button' onClick={() => deleteFunction(item)}>Delete</button>
            </span>
        </div>
    )
}

export default AdminProductCardSmall