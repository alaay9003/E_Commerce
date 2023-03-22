import { CREATE_SUB_CATEGORY ,GET_ERROR, GET_SUB_CATEGORY_ID} from './../type';
import  {useInsertData} from '../../hooks/useInsertData';
import useGetData from './../../hooks/useGetData';


export const createSubCategory = (Data) => async (dispatch) => {
    try {
        const response = await useInsertData('/api/v1/subcategories', Data);
        
        dispatch({
            type: CREATE_SUB_CATEGORY,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}
// get sub category depends on id
export const getOneCategory = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/categories/${id}/subcategories`);
        // console.log(response.data)
        dispatch({
            type: GET_SUB_CATEGORY_ID,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}