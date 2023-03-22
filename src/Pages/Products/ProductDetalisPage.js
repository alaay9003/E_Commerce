import React from 'react'
import { Container } from 'react-bootstrap'
import CategorysHeader from '../../Components/Category/CategorysHeader'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import ProductDetalis from '../../Components/Products/ProductDetalis'
import RateContainer from '../../Components/Rate/RateContainer'
import ViewProductDetailsHook from '../../hook/products/view-product-details-hook'
import { useParams } from 'react-router-dom';


const ProductDetalisPage = () => {
    const {id} =useParams()
    const [item,images,cat,oneBrand,prod] = ViewProductDetailsHook(id)

    if(prod)
        var prods=prod.slice(0,4)
    return (
        <div style={{ minHeight: '670px' }}>
            <CategorysHeader />
            <Container>
                <ProductDetalis />
                <RateContainer />
                <CardProductsContainer products={prods} title="منتجات قد تعجبك" />
            </Container>
        </div>
    )
}

export default ProductDetalisPage