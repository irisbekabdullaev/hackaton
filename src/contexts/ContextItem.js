import React, { useReducer } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const contextItem = React.createContext()

const INIT_STATE = {
    items: [],
    itemDetail: null,
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'GET_ITEMS_DETAIL':
            return { ...state, itemDetail: action.payload }
        // case "GET_PRODUCTS":
        //     return {
        //         ...state,
        //         products: action.payload.products,
        //         nextProducts: action.payload.nextProducts,
        //         prevProducts: action.payload.prevProducts,
        //         count: action.payload.count
        //     }
        default: return state
    }

}


const ContextItemProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    let history = useHistory()



    // const getProducts = async (url) => {
    //     const { data } = await axios.get(url);
    //     dispatch({
    //         type: 'GET_PRODUCTS',
    //         payload: {
    //             products: data.results,
    //             nextProducts: data.next,
    //             prevProducts: data.previous,
    //             count: data.count
    //         }
    //     })
        
    const getItemsDetail = async (id) => {
        let { data } = await axios(`http://localhost:8000/products/${id}`)
        dispatch({
            type: 'GET_ITEMS_DETAIL',
            payload: data
        })
    }








        return (
            <contextItem.Provider value={{
                getItemsDetail,
                // getProducts,
                items: state.items,
                itemDetail: state.itemDetail
                

            }}>
                {children}
            </contextItem.Provider>
        );
    };
// }
export default ContextItemProvider;