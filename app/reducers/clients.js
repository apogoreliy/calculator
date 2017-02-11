import * as types from '../utils/constants';

export default (state = {}, action) => {
    switch (action.type) {
        case types.GET_CLIENTS:
            return {...state, clients : action.clients};
        case types.ADD_CLIENT:
            return {...state, clients : [...state.clients, action.client]};
        case types.HANDLE_MODAL_ADD_CLIENT:
            return {...state, isModalAddClientOpen : action.isModalAddClientOpen };
        case types.HANDLE_MODAL_EDIT_CLIENT:
            return {...state, isModalEditClientOpen : action.isModalEditClientOpen, client : action.client };
        case types.EDIT_CLIENT:
            let editedClients = state.clients.map( client => client._id === action.client._id ? action.client : client);
            return {...state, clients : [...editedClients], client : null};
        case types.HANDLE_MODAL_REMOVE_CLIENT:
            return {...state, isModalRemoveClientOpen : action.isModalRemoveClientOpen, client : action.client
            };
        case types.REMOVE_CLIENT:
            let removedClients = state.clients.filter( item => item._id !== action.client._id);
            return {...state, clients : [...removedClients], client : null};
    }
    return state;
};