import React, { useState } from 'react';
import video from "../../assets/iphone12-video.mp4";
import video2 from "../../assets/macbook-video.mp4";
import airpodsWl from "../../assets/static_airpods.jpg";
import Carousel from "../Carousel/Carousel";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import NavbarProducts from "../Navbar/NavbarProducts";
import axios from "axios";

let API = "http://localhost:8000"

const Board = () => {
   

    
    return (
        <div>
            
            <div className='container' >
                <Header className='col-12' />
            </div>
            <Navbar/>
            <NavbarProducts/>
            <h3 className={'mt-5'} data-aos="fade-up" data-aos-duration="1500" >Почувствуй скорость</h3>
            <h4 data-aos="fade-up" data-aos-duration="2000" >Открой магию</h4>
            <h5 data-aos="fade-up" data-aos-duration="2500" >Новый MacBook Pro</h5>
            <video data-aos="fade-up" data-aos-duration="2000" autoPlay className={'col-12'} >
                <source src={video2} type="video/mp4"/>
            </video>
            <video data-aos="fade-up" data-aos-duration="2500" autoPlay className={'col-12'} >
                <source src={video} type="video/mp4"/>
            </video>
            <img data-aos="fade-up" alt={'airpods'} data-aos-duration="3000" className={'col-12'} src={airpodsWl} />
            <div className={'d-none d-lg-block'} >
                <Carousel className={'p-5'}/>
            </div>
        </div>
    );
};

export default Board;
