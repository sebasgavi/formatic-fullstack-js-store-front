import * as React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import NumberFormat from 'react-number-format';
import api from '../utils/api';

const Checkout = ({ cartList }) => {
    let total = cartList.reduce((accum, elem) => {
        accum += elem.count * elem.price;
        return accum;
    }, 0);

    const handleSubmit = (event) => {
        event.preventDefault();
        let address = event.target.address.value;
        let obj = {
            address,
            products: cartList,
            total,
            state: 'new'
        }
        api.postOrder(obj)
            .then(console.log)
    }
    return <div className="container">
        <div className="row">
            <div className="col-6">
                {cartList.map((elem) => 
                    <ProductCard {...elem} />
                )}
            </div>
            <div className="col-6">
                <h4>Precio total: <NumberFormat thousandSeparator prefix="$ " value={total} displayType="text" /></h4>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="address" placeholder="Dirección de envío"/>

                    <button type="submit">
                        Pagar
                    </button>
                </form>
            </div>
        </div>
    </div>
}

export default Checkout;