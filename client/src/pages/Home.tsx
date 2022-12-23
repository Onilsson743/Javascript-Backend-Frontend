import React from 'react'
import FashionFlashSale from '../components/fullComponents/FashionFlashSale'
import FeaturedProducts from '../components/fullComponents/FeaturedProducts'
import FlashSale from '../components/fullComponents/FlashSale'
import FlashSaleLower from '../components/fullComponents/FlashSaleLower'
import FlashSaleUpper from '../components/fullComponents/FlashSaleUpper'
import Footer from '../components/fullComponents/Footer'
import Header from '../components/fullComponents/Header'
import Navbar from '../components/fullComponents/Navbar'
import Sale from '../components/fullComponents/Sale'
import SortedProductsSection from '../components/fullComponents/SortedProductSection'
import Support from '../components/fullComponents/Support'
import SupportOptions from '../components/fullComponents/SupportOptions'

const Home = () => {
  

  return (
    <div>
        <Navbar />
        <Header />
        <Sale />
        <FeaturedProducts />
        <FlashSale />
        <SupportOptions />
        <FlashSaleUpper />
        <FlashSaleLower />
        <FashionFlashSale />
        <SortedProductsSection />
        <Support />
        <Footer />

    </div>
  )
}

export default Home