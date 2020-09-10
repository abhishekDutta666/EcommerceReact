import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';



function Product({id, title, price, rating, image}) {

    const [{}, dispatch] =useStateValue();
    const addToBasket=()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                price:price,
                rating:rating,
                image:image,
            },
        });
    };

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>Rs. </small>
                    <strong>{price}</strong>
                </p>
                
                <div className="product_rating">
                    {
                        Array(rating).fill().map((_)=>(<p>&#9733;</p>))
                        // &#9734; 
                    }
                </div>
            </div>
            <img src={image} alt="product"/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
}

export default Product
