import React from 'react';



const ProductItem = ({product}) => {
   

    
    
    
    return (
            <div className="card" style={{color: 'black'}}>
                <div className={'p-3'} >
                    <img className="card-img-top" src={product.img} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-title">{product.name}</p>
                            <p className="card-title">Цена:{product.price}c.</p>
                            <p className="card-text"></p>
                            
                           
                            
                        </div>
                </div>
            </div>
    );
};

export default ProductItem;
