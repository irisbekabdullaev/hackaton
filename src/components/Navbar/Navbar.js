import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className={'background-nav d-none d-lg-block '} >
                <div id={'container-nav'} className={'container'} >
                    <h3>Apple Store</h3>
                    <h4>Фирменный Магазин</h4>
                    <h5>Телефон: 0777-77-77-77</h5>
                    <h4>Пр: Манаса, 40 (пер. ул. Киевская)</h4>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
