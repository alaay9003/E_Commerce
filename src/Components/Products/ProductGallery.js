import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "../../hook/products/view-product-details-hook";
import Spinner from "react-bootstrap/Spinner";
const ProductGallery = ({ images }) => {
  const { id } = useParams();
  //const [item, images] = ViewProductDetailsHook(id);

  return (
    <div
      className="product-gallary-card d-flex justfiy-content-center  align-items-center pt-3
        "
      style={{ width: "100%", height: "100%" }}
    >
      <div className="container-fluid slider  ">
        {images.length ? (
          <ImageGallery
            items={images}
            showFullscreenButton={false}
            isRTL={true}
            showPlayButton={false}
            showThumbnails={false}
            renderRightNav={RightButton}
            renderLeftNav={LeftButton}
          />
        ) : (
          <Spinner animation="border" />
        )}
      </div>
    </div>
  );
};

export default ProductGallery;
