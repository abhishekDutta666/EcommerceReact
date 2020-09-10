import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from "react-currency-format";
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}, dispatch]=useStateValue();
    return (
        <div className="checkout">
            {basket.length ===0?(
                <div style={{margin:"10px", color:"white"}}>
                    <h2>Your Shopping Cart is Empty</h2>
                </div>
                ):(
                    <div>
                        <h2 style={{margin:"10px", color:"white"}}>Your Shopping Basket</h2>
                        {
                            basket.map(item=>(
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                    image={item.image}

                                />
                            ))
                        }
                    </div>
                )
            }
            {
                basket.length>0?(
                    <div className="checkout_right">
                        <Subtotal/>    
                    </div>
                ):(<div></div>)
            }

        </div>
    );
}

export default Checkout
