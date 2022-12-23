import React, { useState } from 'react'
import { mongoProductItem, product } from "../../models/types"
import axios from 'axios';
import { ProductContextType, useProductContext } from '../../contexts/ProductContext';


const AdminProductCard: React.FC<mongoProductItem> = ({item, deleteFunction}) => {

    const removeProduct = () => {
        deleteFunction(item)
    }

    const [updateWindow, setUpdateWindow] = useState(false)
    const showUpdateWindow = () => {
      setUpdateWindow(!updateWindow)
    }

    const { setRefetch, refetch } = useProductContext() as ProductContextType
    
    const inputData: product = {
        category: item.category,
        description: item.description,
        imageName: item.imageName,
        name: item.name,
        price: item.price,
        rating: item.rating,
        tag: item.tag
    }

    const [formData, setFormData] = useState<product>(inputData)
    const [apiResponse, setApiResponse] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void  => {
        const {id, value} = e.target;
        setFormData({...formData, [id]: value})        
    }

    let response = ""
    const updateProduct = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(item._id)
        const { data: productData } = await axios.post("http://localhost:5000/api/admin/updateproduct", {
            _id: item._id,
            formData
        })
        response = productData.message
        
        setApiResponse(response)
        setFormData(inputData)
        setRefetch(!refetch)
    }
    
  return (
    <div className='AdminProductCard'>
        {/* Pop up Update Product menu */}
        <div id='updateWindow' className={`${updateWindow ? "d-flex" : ""}`}>
            <div className='updateproduct' >
                <h1>Update Product</h1>
                <h2>{apiResponse}</h2>
                <h2>ID: {item._id}</h2>
                <form onSubmit={updateProduct}>
                    <div className="formOption">
                        <label htmlFor="category">Category</label>
                        <input type="text" placeholder="Category" id="category" value={formData.category} onChange={handleChange} />
                    </div>

                    <div className="formOption">
                        <label htmlFor="description">Description</label>
                        <input type="text" placeholder="Description" id="description" value={formData.description} onChange={handleChange} />
                    </div>

                    <div className="formOption">
                        <label htmlFor="imageName">Image URL</label>
                        <input type="text" placeholder="ImageName" id="imageName" value={formData.imageName} onChange={handleChange} />
                    </div>

                    <div className="formOption">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Name" id="name" value={formData.name} onChange={handleChange} />
                    </div>

                    <div className="formOption">
                        <label htmlFor="price">Price</label>
                        <input type="number" placeholder="Price" id="price" value={formData.price} onChange={handleChange} />
                    </div>

                    <div className="formOption">
                        <label htmlFor="rating">Rating</label>
                        <input type="number" placeholder="Star Rating (1-5)" id="rating" value={formData.rating} onChange={handleChange} />
                    </div>

                    <div className="formOption">
                        <label htmlFor="tag">Tag</label>
                        <input type="text" placeholder="Tag" id="tag" value={formData.tag} onChange={handleChange} />
                    </div>
                    <div className='button-options'>
                        <button type="submit" className="button-theme">Update Product</button>
                        <button type='button' onClick={showUpdateWindow} className="button-theme">Close Window</button>
                    </div>
                    
                </form>
            </div>
        </div>  


        {/* Product card */}
        <div className='ProductImage'>
            <img src={item.imageName} alt="Image" />
        </div>
        <p>ID: {item._id}</p>
        <p>Name: {item.name}</p>
        <div className='button-options'>
            <button className='button-theme' onClick={removeProduct} >Remove item from database</button>
            <button className='button-theme' onClick={showUpdateWindow} >Update Product in database</button>
        </div>
    </div>
  )
}

export default AdminProductCard