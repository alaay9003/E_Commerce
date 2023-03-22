import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategorysHeader from '../../Components/Category/CategorysHeader'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import Pagination from '../../Components/Utility/Pagination'
import SearchCountResult from '../../Components/Utility/SearchCountResult'
import SideFilter from '../../Components/Utility/SideFilter'
import ViewSearchProductsHook from '../../hook/products/view-search-products-hook'

const ShopProducsPage = () => {
  const [items,pagenation,onPress,getProduct,result] = ViewSearchProductsHook();
    if(pagenation)
        var pageCount=pagenation
    else 
        pageCount=0


  return (
    <div style={{minHeight:"670px"}}>
        <CategorysHeader />
        <Container>
        <SearchCountResult title={` هناك ${result} نتيجه بحث  `}/>
        <Row className='d-flex flex-row'>
            <Col sm="2" xs="2" md="1" className='d-flex'>
                <SideFilter />
            </Col>
            <Col sm="10" xs="10" md="11" className='d-flex'>
                <CardProductsContainer products={items}/>
            </Col>
        </Row>
        <Pagination pageCount={pageCount} onPress={onPress}/>
        </Container>

    </div>
  )
}

export default ShopProducsPage