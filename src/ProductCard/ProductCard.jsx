import * as React from 'react';
import config from '../config.json';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom'

const defaultURL = 'https://misanimales.com/wp-content/uploads/2014/12/gato-enfermo.jpg';

const ProductCard = ({ id, name, price, images, setCartList }) => {
    let imageURL = images && images.length > 0 ? config.serverBase + images[0].url : defaultURL;
    
    const handleAddCart = () => {
        setCartList((prevCart) => {
            let copy = prevCart.slice();
            let item = copy.find((prevItem) => prevItem.id === id);
            if(item){
                item.count++;
            } else {
                copy.push({
                    id,
                    name,
                    price,
                    images,
                    count: 1,
                });
            }
            return copy;
        })
    }
    
    return <div className="card">
        <img className="card-img-top" src={imageURL} />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text"><NumberFormat thousandSeparator prefix="$ " value={price} displayType="text" /></p>
            <Link to={`/producto/${id}-${name}`}>
                Ver más
            </Link>
            {setCartList && <button className="btn btn-success" onClick={handleAddCart}>
                Añadir al carrito
            </button>}
        </div>
    </div>
}

export default ProductCard;