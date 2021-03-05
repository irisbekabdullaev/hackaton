import React, {useState} from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button'


let API = 'http://localhost:8000/users';

const Registration = () => {
    let [user, setUser] = useState({});
    function handleInp(e){
        let obj = {
            ...user,
            [e.target.name]: e.target.value,
            id: Date.now()
        };
        setUser(obj);
    }

    function register(){
        axios.post(API, user)
    }

    return (
        
        <div className={'d-flex justify-content-center align-items-center'} style={{position:'absolute', left:0, top:0, right:0, bottom:0, backgroundColor: 'white', opacity: '0.8'}} >
            <div style={{opacity: '1', backgroundColor: 'white', height: '150px', width: '250px'}}>
                <h1 style={{color:'blue'}}>Регистрация</h1>
                <input onChange={(e) => handleInp(e)} name={'account'} />
                <input onChange={(e) => handleInp(e)} name={'password'} />
                <Button onClick={register} variant="warning">Регистрация</Button>
            </div>
        </div>
    );
};

export default Registration;



