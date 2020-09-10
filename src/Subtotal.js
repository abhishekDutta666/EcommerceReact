import React from 'react'
import './Subtotal.css'; 
import CurrencyFormat from "react-currency-format";

import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';

function Subtotal() {

    const [{basket}, dispatch]=useStateValue();

    return (
        <div className="subtotal">
            <div>
                <p>
                    Subtotal ({basket.length} items): <strong>$ {getBasketTotal(basket)}</strong>
                </p>
            </div>
            <button>Proceed to checkout</button>
        </div>
    );
}

export default Subtotal
