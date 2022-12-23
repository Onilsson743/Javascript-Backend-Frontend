import { productItem } from '../../models/types'
import StarRating from './StarRating'


const ProductCardHorizontal: React.FC<productItem> = ({item}) => {

  
  return (
    <div className='_containersmall productcardhorizontal'>
        <div className='img-box' >
          <img src={item.imageName} />
        </div>
        <section className='description'>
            <p>{item.category}</p>
            <h6>{item.name}</h6>
            <span className="star-rating">
                <StarRating amount={item.rating} />
            </span>
            <h5>${item.price}</h5>
        </section>
    </div>
  )
}

export default ProductCardHorizontal