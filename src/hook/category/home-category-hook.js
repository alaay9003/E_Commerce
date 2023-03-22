import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getAllCategory } from '../../redux/actions/categoryAction'; 
function HomeCategoryHook() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllCategory());
  },[])

  const category = useSelector(state=>state.allCategory.category)
  const loading = useSelector(state=>state.allCategory.loading)
  const color =["#F4DBA5","#0034FF","#FFD3E8","#55CFDF","#FF6262","#F4DBA5"]
  return [category,loading,color]
}

export default HomeCategoryHook