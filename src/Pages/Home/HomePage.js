import React from 'react'
import HomeCategory from '../../Components/Home/HomeCategory'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import DiscountSection from '../../Components/Home/DiscountSection'
import BrandFeatured from './../../Components/Brand/BrandFeatured';
import Slider from './../../Components/Home/Slider';
import ViewHomeProductsHook from '../../hook/products/view-home-products-hook';

const HomePage = () => {
  const [items] = ViewHomeProductsHook();
  return (
    <div className='font' style={{minHeight:'670px'}}>
        <Slider />
        <HomeCategory />
        <CardProductsContainer title="الاكثر مبيعا" btntitle="المزيد" pathText="/products" products={items}/>
        <DiscountSection />
        <CardProductsContainer products={items} title="احدث الازياء" btntitle="المزيد" pathText="/products"/>
        <BrandFeatured title="اشهر المركات" btntitle="المزيد" />

    </div>
  )
}

export default HomePage