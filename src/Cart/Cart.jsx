import * as React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Cart = ({ list, setList }) => {
    const [ open, setOpen ] = React.useState(false);

    const handleSubtract = (index) => {
        let copy = list.slice();
        let elem = copy[index];
        if(elem.count > 1){
            elem.count--;
        } else {
            copy.splice(index, 1);
        }
        if(list.length === 0){
            setOpen(false);
        }
        setList(copy);
    }

    let total = list.reduce((accum, elem) => {
        accum += elem.count;
        return accum;
    }, 0);
    return <div>
        <Button onClick={() => setOpen(!open)}>
            Ver Carrito
            <span>{total}</span>
        </Button>
        {open && <ul>
            {list.map(({ id, name, price, images, count }, i) => 
                <li key={id}>
                    {images && images.length && <img src={images[0].url} height="30px" alt=""/>}
                    {name} x {count} &nbsp;
                    <strong>{price * count}</strong>
                    <button onClick={() => handleSubtract(i)}>
                        -
                    </button>
                </li>
            )}
        </ul>}
        <Link to="/checkout">
            Pagar
        </Link>
    </div>;
}

export default Cart;