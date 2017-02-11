import * as types from '../utils/constants';
import utils from '../utils/fetch';
import {handleSpinner} from './auth';

export const getClients = () => {
    return dispatch =>{
        utils.getClients(localStorage.getItem('calculator'), response => {
            dispatch({
                type: types.GET_CLIENTS,
                clients : response.data
            });
        });
    }
};

export const addClient = client => {
    return dispatch =>{
        dispatch(handleSpinner(true));
        dispatch(closeModalAddClient());
        utils.addClient(localStorage.getItem('calculator'), client, item=>{
            dispatch(handleSpinner(false));

            dispatch({
                type: types.ADD_CLIENT,
                client: item.client
            });
        });
    }
};

export const openModalAddClient = () => {
    return {
        type : types.HANDLE_MODAL_ADD_CLIENT,
        isModalAddClientOpen : true
    }
};

export const closeModalAddClient = () => {
    return {
        type : types.HANDLE_MODAL_ADD_CLIENT,
        isModalAddClientOpen : false
    }
};

export const editClient = (clientId, client) => {
    client._id = clientId;
    return dispatch =>{
        dispatch(closeModalEditClient());
        dispatch({
            type: types.EDIT_CLIENT,
            client
        });

        utils.editClient(clientId, client);
    }
};

export const openModalEditClient = client=>{
    return {
        type : types.HANDLE_MODAL_EDIT_CLIENT,
        client,
        isModalEditClientOpen : true
    }
};

export const closeModalEditClient = ()=>{
    return {
        type : types.HANDLE_MODAL_EDIT_CLIENT,
        client : null,
        isModalEditClientOpen : false
    }
};

export const removeClient = client => {
    return dispatch =>{
        dispatch(closeModalRemoveClient());
        dispatch({
            type: types.REMOVE_CLIENT,
            client
        });

        utils.removeClient(localStorage.getItem('calculator'), client._id);
    }
};

export const openModalRemoveClient = client =>{
    return {
        type : types.HANDLE_MODAL_REMOVE_CLIENT,
        client,
        isModalRemoveClientOpen : true
    }
};

export const closeModalRemoveClient = ()=>{
    return {
        type : types.HANDLE_MODAL_REMOVE_CLIENT,
        client : null,
        isModalRemoveClientOpen : false
    }
};