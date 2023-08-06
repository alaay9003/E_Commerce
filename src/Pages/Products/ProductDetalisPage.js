import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import CategorysHeader from "../../Components/Category/CategorysHeader";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import ProductDetalis from "../../Components/Products/ProductDetalis";
import RateContainer from "../../Components/Rate/RateContainer";
import ViewProductDetailsHook from "../../hook/products/view-product-details-hook";
import { useParams } from "react-router-dom";
import ContentLoader from "react-content-loader";
import laptops from "../../images/laptops.png";
import DiscountSection from "../../Components/Home/DiscountSection";

const ProductDetalisPage = () => {
  const { id } = useParams();
  const [item, images, cat, oneBrand, prod] = ViewProductDetailsHook(id);

  if (prod) var prods = prod.slice(0, 4);
  return (
    <div style={{ minHeight: "670px" }}>
      {/* <CategorysHeader /> */}
      <Container>
        {images.length && cat && oneBrand ? (
          <ProductDetalis
            item={item}
            images={images}
            cat={cat}
            oneBrand={oneBrand}
            prod={prod}
          />
        ) : (
          <ContentLoader viewBox="0 0 380 70">
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
          </ContentLoader>
        )}
        <RateContainer />
        <DiscountSection
          img={laptops}
          title={"خصم يصل حتي ٣٠٪ علي اجهازه اللاب توب"}
          color={"#4d4b53 0%, #44414e 100%, #3f404e 100%"}
        />
        {prods ? (
          <CardProductsContainer products={prods} title="منتجات قد تعجبك" />
        ) : (
          <ContentLoader viewBox="0 0 380 70">
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
          </ContentLoader>
        )}
      </Container>
    </div>
  );
};

export default ProductDetalisPage;
