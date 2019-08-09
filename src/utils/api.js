import request from 'superagent';
import { serverBase } from '../config.json';

function getProducts(){
    return request
        .get(serverBase + '/products');
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