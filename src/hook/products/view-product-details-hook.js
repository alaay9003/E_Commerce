import { useDispatch ,useSelector} from 'react-redux';
import { useEffect } from 'react';
import {getOneProduct,getProductLike} from './../../redux/actions/productsAction'
import mobile from '../../images/mobile.png'
import { getOneCategory } from '../../redux/actions/categoryAction';
import { getOneBrand } from '../../redux/actions/brandActions';

const ViewProductDetailsHook = (prodID) => {

    const dispatch=useDispatch()
    
    useEffect(()=>{
        dispatch(getOneProduct(prodID))
    },[])
            

    const Product = useSelector(state=>state.allproducts.oneProduct)
    const category = useSelector(state=>state.allCategory.oneCategory)
    const brand = useSelector(state=>state.allBrand.oneBrand)
    const productLike = useSelector(state=>state.allproducts.oneProductLike)
    let item =[]
    if(Product.data)
    {
        item=Product.data
        // console.log(item)
    }
    else{
        item=[]
    }


    let cat=[]
    //to show category
    if(category.data)
    {
        cat=category.data
        // console.log(cat.name)
    }
    else{
        cat=[]
    }

    // to show image 
    let images =[]
    if(item.images) 
    { 
        images= item.images.map((img)=>{
            return { original : img}
        })
    }
    else
    {
        images =[{ original : `${mobile}`}]
    }

    useEffect(()=>{
        if(item.brand)
            dispatch(getOneBrand(item.brand))
        if(item.category)
        {
            dispatch(getOneCategory(item.category))
            dispatch(getProductLike(item.category))
            // console.log(item.category)
        }
    },[item])

    // to show image 
    let oneBrand =[]
    if(brand.data)
    {
        oneBrand=brand.data
    }
    else{
        oneBrand=[]
    }

    let prod = []
    if(productLike)
    {
        prod=productLike.data
    }
    else
        prod = []

    return [item,images,cat,oneBrand,prod]

}

export default ViewProductDetailsHook