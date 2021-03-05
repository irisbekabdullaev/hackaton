import React, { useEffect, useState, useContext } from 'react';
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import NavbarProducts from "../Navbar/NavbarProducts";
import axios from "axios";
import ProductItem from "./Product-item";
import { cartContext } from '../../contexts/CartContext'
import { IconButton } from '@material-ui/core';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from '@material-ui/core/Button';
import { contextItem } from '../../contexts/ContextItem';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';


let API = 'http://localhost:8000';

const ProductsList = ({ location }) => {
    let [products, setProducts] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const { removeProductFromCart, addProductToCart, cart } = useContext(cartContext)
    const { itemDetail,getProducts } = useContext(contextItem)
    

    let [merchEdit, setMerchEdit] = useState({});
    let [addModal, setAddModal] = useState(true);
    let history = useHistory();
    let [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('currentUser')));
    let [merch, loadMerch] = useState([]);
    let [modal, setModal] = useState(false);
    let [merchId, setMerchId] = useState('');

    function show() {
        let adress = localStorage.getItem('product');
        axios.get(`${API}/${adress}`).then(res => setProducts(res.data));
    }
    function deleteProducts(id) {
        let adress = localStorage.getItem('product')
        axios.delete(`${API}/${adress}/${id}`).then(res => show(res.data))
    }
    function getMerchs() {
        axios.get(`${API}/${location.product}`).then(res => setProducts(res.data));
    }
    const addToFavorite = (item) => {
        let testNewObj = {
            ...item,
            cartId: Date.now()
        };

        if (JSON.parse(localStorage.getItem('favorite'))) {
            let arr = JSON.parse(localStorage.getItem('favorite'));
            arr.push(testNewObj);
            localStorage.setItem('favorite', JSON.stringify(arr));
        } else {
            let arr = [];
            arr.push(testNewObj);
            localStorage.setItem('favorite', JSON.stringify(arr));
        }
    };

    function itemToEditModal(item) {
        setMerchId(item.id);
        setMerchEdit(item);
        setModal(true);
    }
    function onChangeInp(e) {
        let obj = {
            ...merchEdit,
            [e.target.name]: e.target.value
        };
        setMerchEdit(obj);
    }
    async function saveChanges() {
        await axios.patch(`${API}/${location.product}/${merchId}`, merchEdit);
        setModal(false);
        getMerchs();
    }


    useEffect(() => {
        show();
    }, [location.product]);


    return (
        <div className={'bg-black'} >
            <Header />
            <NavbarProducts />
            {
                addModal ?
                    <div className={'d-flex bg-dark col-12 justify-content-center flex-wrap flex-direction-column'} >
                        
                        {
                            products ? products.map((item) => {
                                return (
                                    <div className={'col-md-4 col-lg-3 m-1'} style={{ boxShadow: '3px 5px 10px', border: '1px solid', borderRadius: '25px' }} key={item.id} >
                                           
                                            <ProductItem product={item} />
                                            <IconButton>
                                            <DeleteIcon onClick={() => deleteProducts(item.id)} />
                                            </IconButton>
                                            {/* <button className="btn btn-primary" onClick={() => deleteProducts(item.id)}>Удалить</button> */}

                                            {
                                                cart.find(product => product.id === itemDetail?.id) ?

                                                    <Button onClick={() => removeProductFromCart(itemDetail?.id)} variant="contained" color="secondary" style={{ marginTop: 15 }}>
                                                        Удалить из корзины
                                    </Button> :

                                                    <IconButton style={{ marginTop: 15 }} onClick={() => addProductToCart(item)}>
                                                        <ShoppingCartIcon />
                                                    </IconButton>
                                            }
                                            <IconButton>

                                                <FavoriteIcon onClick={() => addToFavorite(item)} />
                                            </IconButton>
                                            <IconButton>
                                                <EditIcon onClick={() => itemToEditModal(item)} />
                                            </IconButton>
                                        </div>
                                )
                            }) : null
                        }
                    </div>
                    : null
                        }
                        {
                            modal ?
                                <div className={'col-6 col-md-3'} style={{position:'fixed',backgroundColor:'red',display:'flex',justifyContent:'center',flexDirection:'column'}} >
                                    <input onChange={onChangeInp} name={'name'} required value={merchEdit.name} />
                                    <input onChange={onChangeInp} name={'price'} required value={merchEdit.price} />
                                    <input onChange={onChangeInp} name={'img'} required value={merchEdit.img} />
                                    <img className={'img-fluid'} src={merchEdit.img} />
                                    <button onClick={saveChanges}>Save</button>
                                    <button onClick={() => setModal(false)} >Close</button>
                                </div>
                                : null
                        }
                    </div>
        
    );
};


export default ProductsList;



