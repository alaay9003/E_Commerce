import React from "react";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "./../../Components/Brand/BrandFeatured";
import Slider from "./../../Components/Home/Slider";
import ViewHomeProductsHook from "../../hook/products/view-home-products-hook";
import laptops from "../../images/laptops.png";
import cloth from "../../images/clothe.png";
import { Container } from "react-bootstrap";
const HomePage = () => {
  const [items] = ViewHomeProductsHook();
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory />
      <CardProductsContainer
        title="الاكثر مبيعا"
        btntitle="المزيد"
        pathText="/products"
        products={items}
      />
      <DiscountSection
        img={laptops}
        title={"خصم يصل حتي ٣٠٪ علي اجهازه اللاب توب"}
        color={"#4d4b53 0%, #44414e 100%, #3f404e 100%"}
      />
      <CardProductsContainer
        products={items}
        title="احدث الازياء"
        btntitle="المزيد"
        pathText="/products"
      />
      <Container>
        <Slider />
      </Container>
      <BrandFeatured title="اشهر المركات" btntitle="المزيد" />
      <DiscountSection
        img={cloth}
        title={"خصم يصل حتي ٣٠٪ علي الملابس"}
        color={"circle, #4b3d86 0%, #422d9d 100%, #262f8a 100%"}
      />
    </div>
  );
};

export default HomePage;
