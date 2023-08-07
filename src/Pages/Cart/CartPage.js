import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CartCheckout from "../../Components/Cart/CartCheckout";
import CartItem from "../../Components/Cart/CartItem";
import GetAllUserCartHook from "../../hook/cart/get-all-user-cart-hook";
import ContentLoader from "react-content-loader";

const CartPage = () => {
  const [
    itemsNum,
    cartItems,
    totalCartPrice,
    couponNameRes,
    totalCartPriceAfterDiscount,
  ] = GetAllUserCartHook();
  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>
        <div className="cart-title mt-4">عربة التسوق</div>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs="12" md="9">
          {cartItems ? (
            cartItems.length >= 1 ? (
              cartItems.map((item, index) => {
                return <CartItem key={index} item={item} />;
              })
            ) : (
              <ContentLoader viewBox="0 0 380 90" backgroundColor="#dfdfe0">
                {/* Only SVG shapes */}
                <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
                <rect x="20" y="17" rx="4" ry="4" width="300" height="13" />
                <rect x="20" y="40" rx="3" ry="3" width="250" height="10" />
              </ContentLoader>
            )
          ) : (
            <h6>لا يوجد منتجات فى العربة</h6>
          )}
        </Col>

        <Col xs="6" md="3">
          <CartCheckout totalCartPrice={totalCartPrice} />
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
