import CreditCard from '../../data/images/credit-card.svg';
import CustomerSupport from '../../data/images/customer-service.svg'
import Truck from '../../data/images/delivery-truck.svg'

const Support = () => {
  return (
    <div className='_center'>
        <div className='_containersmall support'>
            <div className='information'>
                <div className='img-box'>
                    <img src={CustomerSupport} />
                </div>
                <h6>Customer Support</h6>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className='information'>
                <div className='img-box'>
                    <img src={CreditCard} />
                </div>
                <h6>Secured Payment</h6>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className='information'>
                <div className='img-box'>
                    <img src={Truck} />
                </div>
                <h6>Free Home Delivery</h6>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className='information'>
                <div className='img-box'>
                    <img src={Truck} />
                </div>
                <h6>30 Day Reuters</h6>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
        </div>
    </div>
  )
}

export default Support