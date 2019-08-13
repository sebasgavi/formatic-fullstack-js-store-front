import request from 'superagent';
import { serverBase } from '../config.json';

var _jwt = null;
var user = {};

function getProducts(catId, price){
    if(catId) {
        let [id] = catId.split('-');
        return getCategories(id);
    }

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

function getProductById(productId){
    let [id] = productId.split('-');
    return request
        .get(`${serverBase}/products/${id}`);
}

function getCategories(catId){
    let filter = catId ? '/' + catId : '';
    return request
        .get(serverBase + '/categories' + filter);
}

function postOrder(order){
    return request
        .post(serverBase + '/orders', order)
        .set('Authorization', `Bearer ${_jwt}`);
}

function register(username, email, password){
    return request.post(serverBase + '/auth/local/register', {
            username: username,
            email: email,
            password: password
        })
        .then(res => {
            if(res.body){
                _jwt = res.body.jwt;
                Object.keys(res.body.user)
                    .forEach(key => {
                        user[key] = res.body.user[key];
                    });
            }
            return res;
        });
}


function login(email, password){
    return request.post(serverBase + '/auth/local', {
            identifier: email,
            password: password
        })
        .then(res => {
            if(res.body){
                _jwt = res.body.jwt;
                Object.keys(res.body.user)
                    .forEach(key => {
                        user[key] = res.body.user[key];
                    });
            }
            return res;
        });
}

const api = {
    getProducts,
    getSearchProducts,
    getProductById,
    getCategories,
    register,
    login,
    user,
    postOrder,
};

export default api;