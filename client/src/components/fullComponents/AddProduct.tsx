import { product } from "../../models/types"
import { useState } from 'react'
import React from "react"
import axios from "axios"
import { ProductContextType, useProductContext } from "../../contexts/ProductContext"

const AddProduct = () => {

  const inputData: product = {
    category: "",
    description: "",
    imageName: "",
    name: "",
    price: 0,
    rating: 0,
    tag: ""
  }


  const { setRefetch, refetch } = useProductContext() as ProductContextType
  const [formData, setFormData] = useState<product>(inputData)
  const [apiResponse, setApiResponse] = useState("")
  const [updateWindow, setUpdateWindow] = useState(false)

  const showUpdateWindow = () => {
    setUpdateWindow(!updateWindow)
  }
  const closeWindow = () => {
    setUpdateWindow(false)
    setApiResponse("")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void  => {
    const {id, value} = e.target;
    setFormData({...formData, [id]: value})        
  }

  let response = ""
  const addToDatabase = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data: productData } = await axios.post("http://localhost:5000/api/admin/addproduct", {
      formData
    })
    response = productData.message
    setApiResponse(response)
    setFormData(inputData)
    setRefetch(!refetch)
  }
  return (
    <div className='AddOrModifyProduct'>
            <button className='update-button' onClick={showUpdateWindow}>Add New Product</button>
            {/* Pop up Update Product menu */}
            <div className={`${updateWindow ? "d-flex updateWindow" : "updateWindow"}`}>
                <div className='updateproduct' >
                    <h1>Add a new product</h1>
                    <h6>{apiResponse}</h6>
                    <form onSubmit={addToDatabase}>
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
                            <select id='tag' name='Tag' value={formData.tag} onChange={handleChange}>
                              <option value="" disabled>Please Select an option</option>
                                <option value="Featured">Featured</option>
                                <option value="Flash Sale">Flash Sale</option>
                                <option value="Latest Product">Latest Product</option>
                                <option value="Best Selling Products">Best Selling Products</option>
                                <option value="Top Rated Products">Top Rated Products</option>
                            </select>
                        </div>
                        <div className='button-options'>
                            <button type="submit" className="button-theme">Add Product</button>
                            <button type='button' onClick={closeWindow} className="button-theme">Close Window</button>
                        </div>
                        
                    </form>
                </div>
            </div>  
        </div>
    // <div className='newproduct' >
    //     <h1>Add a new Product to database</h1>
    //     <h2>{apiResponse}</h2>
    //     <form onSubmit={addToDatabase}>
    //       <div className="formOption">
    //         <label htmlFor="category">Category</label>
    //         <input type="text" placeholder="Category" id="category" value={formData.category} onChange={handleChange} />
    //       </div>

    //       <div className="formOption">
    //         <label htmlFor="description">Description</label>
    //         <input type="text" placeholder="Description" id="description" value={formData.description} onChange={handleChange} />
    //       </div>

    //       <div className="formOption">
    //         <label htmlFor="imageName">Image URL</label>
    //         <input type="text" placeholder="ImageName" id="imageName" value={formData.imageName} onChange={handleChange} />
    //       </div>

    //       <div className="formOption">
    //         <label htmlFor="name">Name</label>
    //         <input type="text" placeholder="Name" id="name" value={formData.name} onChange={handleChange} />
    //       </div>

    //       <div className="formOption">
    //         <label htmlFor="price">Price</label>
    //         <input type="number" placeholder="Price" id="price" value={formData.price} onChange={handleChange} />
    //       </div>

    //       <div className="formOption">
    //         <label htmlFor="rating">Rating</label>
    //         <input type="number" placeholder="Star Rating (1-5)" id="rating" value={formData.rating} onChange={handleChange} />
    //       </div>

    //       <div className="formOption">
    //         <label htmlFor="tag">Tag</label>
    //         <input type="text" placeholder="Tag" id="tag" value={formData.tag} onChange={handleChange} />
    //       </div>

    //       <button type="submit" className="button-theme">Add Product</button>
    //     </form>
    // </div>
  )
}

export default AddProduct