import React from "react";
import { Container } from "react-bootstrap";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from './../../Components/Utility/Pagination';
import AllCategoryHook from "../../hook/category/all-category-page";

const AllCategoryPage = () => {

  const [loading,pageCount,getPage,category] = AllCategoryHook();
  return (
    <Container style={{ minHeight: "670px" }}>
      <CategoryContainer data={category.data} loading={loading}/>
      {
        pageCount > 1 ? (
          <Pagination pageCount={pageCount} onPress={getPage}/>
        ) :null
      }
      
    </Container>
  );
};

export default AllCategoryPage;