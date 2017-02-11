import { connect } from 'react-redux';
import ClientsPage from '../components/clients/ClientsPage';
import * as actions from '../actions/clients';

const mapStateToProps = (state)=>{
    //state.clients.searchedclients ||

    return{
        clients : state.clients.clients,
        isModalAddClientOpen : state.clients.isModalAddClientOpen || false,
        isModalEditClientOpen : state.clients.isModalEditClientOpen || false,
        isModalRemoveClientOpen : state.clients.isModalRemoveClientOpen || false,
        client : state.clients.client || null,
        intlMessages : state.intl
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        openModalAddClient : ()=>{
            dispatch(actions.openModalAddClient());
        },
        closeModalAddClient : ()=>{
            dispatch(actions.closeModalAddClient());
        },
        addClient : client =>{
            dispatch(actions.addClient(client));
        },
        openModalEditClient : client =>{
            dispatch(actions.openModalEditClient(client));
        },
        closeModalEditClient : ()=>{
            dispatch(actions.closeModalEditClient());
        },
        editClient : (clientId, client) =>{
            dispatch(actions.editClient(clientId, client));
        },
        openModalRemoveClient : client =>{
            dispatch(actions.openModalRemoveClient(client));
        },
        closeModalRemoveClient : ()=>{
            dispatch(actions.closeModalRemoveClient());
        },
        removeClient : client =>{
            dispatch(actions.removeClient(client));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientsPage);