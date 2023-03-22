import React from 'react'
import BrandContainer from '../../Components/Brand/BrandContainer';
import Pagination from './../../Components/Utility/Pagination';
import AllCategoryHook from '../../hook/brand/all-brand-page-hook';

const AllBrandPage = () => {
    const [loading,pageCount,getPage,brand]= AllCategoryHook()
    return (
        <div style={{minHeight:'670px'}}>
            <BrandContainer data={brand.data} loading={loading}/>
            <Pagination pageCount={pageCount} onPress={getPage}/>
        </div>
    )
}

export default AllBrandPage