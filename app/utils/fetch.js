import axios from 'axios';

const ROOT_URL = location.host === 'localhost:3000' ? 'http://localhost:3000' : 'https://infinite-coast-35847.herokuapp.com';

//For testing
//const ROOT_URL = 'http://localhost:3000';

export default {
    auth (type, login, password, callback){
        axios.post(`${ROOT_URL}/auth`, {type, login, password})
            .then((response) => {
                callback(response);
            })
            .catch(err => {
                console.log('err', err)
            });
    },

    checkAuth (token, callback){
        axios.post(`${ROOT_URL}/check_auth`, {token})
            .then((response) => {
                callback(response);
            })
            .catch(err => {
                console.log('err', err)
            });
    },

    getPlaces(token, callback){
        axios.post(`${ROOT_URL}/get_places`, {token})
            .then(response => {
                callback(response);
            })
            .catch(err => {
                console.log('err', err)
            });
    },

    addPlace (token, place, callback){
        axios.post(`${ROOT_URL}/add_place`, {token, place})
            .then(response => {
                callback(response.data);
            })
            .catch(err => {
                console.log('err', err)
            });
    },

    editPlace (placeId, place){
        axios.post(`${ROOT_URL}/edit_place`, {placeId, place})
            .catch(err => { console.log('err', err) });
    },

    removePlace(token, place){
        axios.post(`${ROOT_URL}/remove_place`, {token, place})
            .catch(err => {
                console.log('err', err)
            });
    },

    getClients(token, callback){
        axios.post(`${ROOT_URL}/get_clients`, {token})
            .then(response => {
                callback(response);
            })
            .catch(err => {
                console.log('err', err)
            });
    },

    addClient (token, client, callback){
        axios.post(`${ROOT_URL}/add_client`, {token, client})
            .then(response => {
                callback(response.data);
            })
            .catch(err => {
                console.log('err', err)
            });
    },

    editClient (clientId, client){
        axios.post(`${ROOT_URL}/edit_client`, {clientId, client})
            .catch(err => { console.log('err', err) });
    },

    removeClient(token, client){
        axios.post(`${ROOT_URL}/remove_client`, {token, client})
            .catch(err => {
                console.log('err', err)
            });
    }
};