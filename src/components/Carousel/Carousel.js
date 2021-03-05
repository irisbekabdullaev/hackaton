import React from 'react';
import iphone12 from '../../assets/iphone12.png';
import macbook from '../../assets/macbook.png';
import air from '../../assets/air.png';
import ipad from '../../assets/ipad.png';

const Carousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner" style={{margin: '70px auto'}}>
                <div className="carousel-item col-12 active" >
                    <img className="d-block col-10" src={iphone12} alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block col-10" src={macbook} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block col-10" src={air} alt="Third slide"/>
                </div>
                <div className={'carousel-item'} >
                    <img alt={'ipad'} className={'d-block col-10'} src={ipad} />
                </div>
            </div>
            <div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Carousel;
