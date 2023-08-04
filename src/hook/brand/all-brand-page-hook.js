import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllBrand, getAllBrandPage } from "../../redux/actions/brandActions";

const AllCategoryHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrand(18));
  }, []);

  const brand = useSelector((state) => state.allBrand.brand);
  const loading = useSelector((state) => state.allBrand.loading);

  let pageCount = 0;
  if (brand.paginationResult) pageCount = brand.paginationResult.numberOfPages;

  const getPage = (page) => {
    dispatch(getAllBrandPage(page));
  };
  return [loading, pageCount, getPage, brand];
};

export default AllCategoryHook;
