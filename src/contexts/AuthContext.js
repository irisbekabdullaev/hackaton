import React, { useReducer, useEffect } from 'react';

import axios from 'axios';

// import { ToastContainer, toast } from 'react-toastify';


export const authContext = React.createContext();

const INIT_STATE = {
    loginUser: []
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return { ...state, loginUser: action.payload }
        case "GET_LOGIN_USER": 
            return {...state, loginUser: action.payload}
        default: return state
    }
}

const AuthContextProvider = ({ children }) => {
    let API_USERS = "http://localhost:8000/users"
    //регистрация 

    const registerUser = async (newObj) => {
        (await axios.post(`${API_USERS}`, newObj))
    }
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const loginUserData = async (email) => {
        let { data } = await axios.get(`${API_USERS}?email=${email}`)
        dispatch({
            type: "LOGIN_USER",
            payload: data
        })
    }

    function getLoginUser(){
        const loginUser = JSON.parse(localStorage.getItem("currentUser"))
        dispatch({
            type: "GET_LOGIN_USER",
            payload: loginUser
        })
    }

    return (
        <authContext.Provider value={{
            loginUser: state.loginUser,
            registerUser,
            loginUserData,
            getLoginUser
        }}>

            {children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;