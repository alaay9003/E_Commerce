import { CREATE_ProductS , GET_ERROR,GET_Product_DETAILS} from '../type'
import { GET_ALL_ProductS, GET_Product_Like ,DELETE_Product,UPDATE_PRODUCT} from './../type';

const inital = {
    products: [],
    loading: true,
    allProducts:[],
    oneProduct:[],
    updateProducts:[],
    oneProductLike:[],
    deleteProduct:[],
}
const productsReducer = (state = inital, action) => {
    switch (action.type) {
        case CREATE_ProductS: 
            return {
                ...state,
                products: action.payload,
                loading: false,
            }
        case GET_ERROR:
            return {
                loading: true,
                products: action.payload,
            }
        case GET_ALL_ProductS:
            return {
                ...state,
                loading: true,
                allProducts: action.payload,
            }
        case GET_Product_DETAILS:
            return {
                loading: true,
                oneProduct: action.payload,
            }
        case GET_Product_Like:
            return {
                ...state,
                loading: true,
                oneProductLike: action.payload,
            }
        case DELETE_Product:
            return {
                ...state,
                loading: true,
                deleteProduct: action.payload,
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                loading: true,
                updateProducts: action.payload,
            }
        default:
            return state;
    }
    
}
export default productsReducer