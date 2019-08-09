import * as React from 'react';
import config from '../config.json';

const defaultURL = 'https://misanimales.com/wp-content/uploads/2014/12/gato-enfermo.jpg';

const ProductCard = ({ name, price, images }) => {
    let imageURL = images && images.length > 0 ? config.serverBase + images[0].url : defaultURL;
    return <div className="card">
        <img className="card-img-top" src={imageURL} />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{price}</p>
        </div>
    </div>
}

export default ProductCard;