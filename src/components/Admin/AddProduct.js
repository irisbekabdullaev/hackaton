import React, { useState } from 'react';
import axios from "axios";
import NavbarProducts from '../Navbar/NavbarProducts';
import Button from 'react-bootstrap/Button'

let API = 'http://localhost:8000';

const AddProduct = () => {
    let [product, setProduct] = useState({});
    let [category, setCategory] = useState('');
    function handleInp(e) {
        let obj = {
            ...product,
            [e.target.name]: e.target.value,
            id: Date.now()
        };
        setProduct(obj);
    }
    function add() {
        
        axios.post(`${API}/${category}`, product);
    }


    return (
        <div>


            <NavbarProducts />
            <div className="container">
                <div className="product">
                    <h3>Добавление товара</h3>
                    <div style={{ margin: '100px auto', display: 'flex', flexDirection: 'column', justifyContent: 'center',width:'30%',height:'30%' }} className="item-plus">
                        
                        <input style={{margin:10}} placeholder={'название товара'} onChange={(e) => handleInp(e)} name={'name'} />
                        <input style={{margin:10}} placeholder={'изображение'} onChange={(e) => handleInp(e)} name={'img'} />
                        <input style={{margin:10}} placeholder={'цена'} onChange={(e) => handleInp(e)} name={'price'} />
                        <select className="item-category" 
                            name="category"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option>Выбрать категорию</option>
                            <option value="iPhones">Iphone</option>
                            <option value="macbooks">MacBook</option>
                            <option value="watch">Apple Watch</option>
                            <option value="airpods">Airpod</option>
                            <option value="iMac">iMac</option>
                            <option value="iPads">iPad</option>
                        </select>
                        <Button onClick={add} variant="outline-info">Добавить</Button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
