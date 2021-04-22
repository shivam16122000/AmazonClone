import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    let total = 0;
    for (let i = 0; i < basket.length; i++) {
        total = total + basket[i].price;
    }
    return (
        <div className="subtotal">
            <CurrencyFormat
                value={total}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
                renderText={(value) => (
                    <div>
                        <p>
                            SubTotal({basket?.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </div>
                )}
            />
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
