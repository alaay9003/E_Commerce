import { useDispatch ,useSelector} from 'react-redux';
import { useEffect } from 'react';
import {getProducts} from './../../redux/actions/productsAction'


const ViewHomeProductsHook = () => {
    
    const dispatch=useDispatch()
    
    useEffect(()=>{
        dispatch(getProducts())
    },[])

    const allProducts = useSelector(state=>state.allproducts.allProducts)
    let items =[]
    if(allProducts.data)
    {
        items=allProducts.data.slice(0,4)
        // console.log(items)
    }
    else{
        items=[]
    }
    return [items]
}

export default ViewHomeProductsHook