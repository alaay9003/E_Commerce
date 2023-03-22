import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAllCategory, getAllCategoryPage  } from "./../../redux/actions/categoryAction";

const AllCategoryHook = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllCategory(6))
  },[])

  const category = useSelector(state=>state.allCategory.category)
  const loading = useSelector(state=>state.allCategory.loading)

  
  let pageCount=0
  if(category.paginationResult)
    pageCount=category.paginationResult.numberOfPages;


  const getPage=(page)=>{
    dispatch(getAllCategoryPage(page))
  }
  return [loading,pageCount,getPage,category]
}

export default AllCategoryHook