import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAllProducts from '../../Components/Admin/AdminAllProducts'
import Pagination from './../../Components/Utility/Pagination';
import ViewProductAdminHook from '../../hook/admin/view-product-admin-hook';
import { useDispatch } from 'react-redux';
import { getAllProductPage } from '../../redux/actions/productsAction';

const AdminAllProductsPage = () => {
    const dispatch=useDispatch();
    const [items,pagenation]=ViewProductAdminHook()
    // if(items)
    // {console.log(items)
    //     console.log(pagenation)
    // }
    if(pagenation)
        var pageCount=pagenation
    else 
        pageCount=0

    const onPress=async(page)=>{
        await dispatch(getAllProductPage(page,2))
    }
    return (
        <Container style={{minHeight:"670px"}}>
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAllProducts products={items}/>
                    {
                        pageCount > 1 ? (<Pagination pageCount={pageCount} onPress={onPress}/>) : null 
                    }
                    
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAllProductsPage