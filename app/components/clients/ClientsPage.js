import React, { PropPlaces } from 'react';
import ButtonCustom from '../common/Button';
import ClientsList from './ClientsList';
import ModalRemoveItem from '../common/ModalRemoveItem';
import ModalAddEditClient from './ModalAddEditClient';
import SearchFilter from '../common/SearchFilter';

const ClientsPage = (props)=>(
    <div className="container">
        <form className="form-inline">
            <ButtonCustom classSet="btn-primary" handleClick={props.openModalAddClient} text={props.intlMessages['addClient']} icon="fa-plus-circle" />
            <SearchFilter onChange={props.searchClient} placeholderText={props.intlMessages['searchClient']} />
        </form>
        <ClientsList
            intlMessages={props.intlMessages}
            clients={props.clients}
            openModalEditItem={props.openModalEditClient}
            openModalRemoveItem={props.openModalRemoveClient} />
        {props.isModalAddClientOpen && <ModalAddEditClient
            header={props.intlMessages['addClient']}
            handleItem={(initialClient, client)=>props.addClient(client)}
            closeModal={props.closeModalAddClient}
            intlMessages={props.intlMessages}
            item={{address:'', date: new Date(), name : '', _id : 0, description: ''}} /> }
        {props.isModalEditClientOpen && <ModalAddEditClient
            handleItem={props.editClient}
            header={props.intlMessages['editClient']}
            closeModal={props.closeModalEditClient}
            intlMessages={props.intlMessages}
            item={props.client} /> }
        {props.isModalRemoveClientOpen && <ModalRemoveItem
            item={props.client}
            type ={props.intlMessages['clientSML']}
            intlMessages={props.intlMessages}
            removeItem={props.removeClient}
            closeModal={props.closeModalRemoveClient} /> }
    </div>
);

export default ClientsPage;