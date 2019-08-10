import request from 'superagent';
import { serverBase } from '../config.json';

function getProducts(catId, price){
    let filters = [];

    if(catId) filters.push('category._id='+catId);
    if(price) filters.push('price_lte='+price);

    let filtersString = filters.join('&');
    if(filtersString) filtersString = '?' + filtersString;

    return request
        .get(serverBase + '/products' + filtersString);
}

function getSearchProducts(searchString){
    return request
        .get(`${serverBase}/products?name_contains=${searchString}`);
}

function getCategories(){
    return request
        .get(serverBase + '/categories');
}

const api = {
    getProducts,
    getSearchProducts,
    getCategories,
};

export default api;