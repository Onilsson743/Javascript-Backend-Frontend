import { useState } from 'react'
import { ShoppingCartType, useShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { productItem } from '../../models/types';
import StarRating from './StarRating';



const ProductCard: React.FC<productItem> = ({item}) => {

    const {addProductToCart, addProductToFavourites} = useShoppingCartContext() as ShoppingCartType



    const [imagePreview, setImagePreview] = useState(false);
    const showImage = () => {
      setImagePreview(!imagePreview)
    }

    return (
      <div className="product-card">
          <div id='imagePreview' onClick={showImage} className={`${imagePreview ? "d-flex" : ""}`} >
            <img src={item.imageName} />
          </div>
          <div className="img-window">
              <img src={item.imageName} />
              
              <div className="icons">
                  <a className="icon-links"><i className="fa-regular fa-code-compare"></i></a>
                  <span className="icon-links" onClick={() => addProductToFavourites(item)}><i className="fa-regular fa-heart"></i></span>
                  <span className="icon-links" onClick={() => addProductToCart(item)} ><i className="fa-regular fa-bag-shopping"></i></span>
              </div>
              <button className="button-theme" onClick={showImage} >Quick View</button>
          </div>
          <div className='text-area'>
            <p>{item.category}</p>
            <h6>{item.name}</h6>
            <span className="star-rating">
              <StarRating amount={item.rating} />
            </span>
            <h5>${item.price}</h5>
          </div>
      </div>
    )
  }
  
  export default ProductCard