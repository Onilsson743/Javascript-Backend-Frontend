import LeftImg from '../../data/images/banner-img-left.png'
import RightImg from '../../data/images/banner-img-right.png'

const Header = () => {
  return (
    <div className='header '>
      <div className='_container'>
        <img id='headerleftimg' src={LeftImg} alt="Left Image" />
        <section className="header-text">
            <h1>SALE UP</h1>
            <h1>To 50% Off</h1>
            <p>Online shopping free home delivery over $100</p>
            <button className="button-theme">SHOP NOW</button>
        </section>
        <img id='headerrightimg' src={RightImg} alt="Right Image" />
      </div>
    </div>
  )
}

export default Header