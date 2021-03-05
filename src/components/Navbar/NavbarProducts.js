import React from 'react';
import {Link} from "react-router-dom";
import AppleIcon from '@material-ui/icons/Apple';
import { IconButton } from '@material-ui/core';

const NavbarProducts = () => {

    function setItemName(product_name){
        localStorage.setItem('product', product_name);
    }

    return (
        <div className={'sticky-top'}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className={'container'} >
                    <IconButton>
                        <Link to="/">
                        <AppleIcon/>
                        </Link>
                    </IconButton>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li onClick={() => setItemName('iPhones')} className="nav-item ml-5">
                                <Link className={'nav-link container-icons'} to={{
                                    pathname:'/products',
                                    product: 'iPhones'
                                }} >
                                    <img className={'d-none d-lg-block '} alt={'img'} src={'https://istore.kg/static/img/iphone.svg'}/>
                                    iPhone
                                </Link>
                            </li>

                            <li onClick={() => setItemName('macbooks')} className="nav-item ml-5">
                                <Link className={'nav-link container-icons'} to={{
                                    pathname:'/products',
                                    product: 'macbooks'
                                }} >
                                    <img className={'d-none d-lg-block'} alt={'img'} src={'https://istore.kg/static/img/macbook.svg'} />
                                    MacBook
                                </Link>
                            </li>

                            <li onClick={() => setItemName('iPads')} className="nav-item ml-5">
                                <Link className={'nav-link container-icons'} to={{
                                    pathname:'/products',
                                    product: 'iPads'
                                }} >
                                    <img className={'d-none d-lg-block '} alt={'img'} src={'https://istore.kg/static/img/ipad.svg'}/>
                                    iPad
                                </Link>
                            </li>

                            <li onClick={() => setItemName('iMac')} className="nav-item ml-5">
                                <Link className={'nav-link container-icons'} to={{
                                    pathname:'/products',
                                    product: 'iMac'
                                }}>
                                    <img className={'d-none d-lg-block '} alt={'img'} src={'https://istore.kg/static/img/iMac.svg'}/>
                                    iMac
                                </Link>
                            </li>

                            <li onClick={() => setItemName('watch')} className="nav-item ml-5">
                                <Link className={'nav-link container-icons'} to={{
                                    pathname:'/products',
                                    product: 'watch'
                                }} >
                                    <img className={'d-none d-lg-block '} alt={'img'} src={'https://istore.kg/static/img/watch.svg'}/>
                                    Watch
                                </Link>
                            </li>

                            <li className="nav-item ml-5">
                                <Link onClick={() => setItemName('airpods')} className={'nav-link container-icons'} to={{
                                    pathname:'/products',
                                    product: 'airpods'
                                }} >
                                    <img className={'d-none d-lg-block'} alt={'img'} src={'https://istore.kg/static/img/airpods.svg'} />
                                    AirPods
                                </Link>
                            </li>

                            <li className="nav-item ml-5">
                                <a className={'nav-link container-icons'} href="#" >
                                    <img className={'d-none d-lg-block'} alt={'img'} src={'https://istore.kg/static/img/apple_tv.svg'} />
                                    AppleTv
                                </a>
                            </li>

                            <li className="nav-item ml-5">
                                <a className={'nav-link container-icons'} href="#" >
                                    <img className={'d-none d-lg-block '} alt={'img'} src={'https://istore.kg/static/img/accessory.svg'} />
                                    Accesories
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavbarProducts;
