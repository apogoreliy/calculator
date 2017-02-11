import React, { PropPlaces } from 'react';
import ButtonCustom from '../common/Button';
import ListItems from '../common/ListItems';
import ModalRemoveItem from '../common/ModalRemoveItem';
import ModalAddEditPlace from './ModalAddEditPlace';
import SearchFilter from '../common/SearchFilter';

const PlacesPage = (props)=>(
    <div className="container">
        <form className="form-inline">
            <ButtonCustom classSet="btn-primary" handleClick={props.openModalAddPlace} text={props.intlMessages['addPlace']} icon="fa-plus-circle" />
            <SearchFilter onChange={props.searchPlace} placeholderText={props.intlMessages['searchPlace']} />
        </form>
        <ListItems
            intlMessages={props.intlMessages}
            items={props.places}
            clients={props.clients}
            openModalEditItem={props.openModalEditPlace}
            openModalRemoveItem={props.openModalRemovePlace} />
        {props.isModalAddPlaceOpen && <ModalAddEditPlace
            header={props.intlMessages['addPlace']}
            handleItem={(initialPlace, place)=>props.addPlace(place)}
            closeModal={props.closeModalAddPlace}
            intlMessages={props.intlMessages}
            clients={props.clients}
            item={{address:'', date: new Date(), client : 0, _id : 0, description: ''}} /> }
        {props.isModalEditPlaceOpen && <ModalAddEditPlace
            handleItem={props.editPlace}
            header={props.intlMessages['editPlace']}
            closeModal={props.closeModalEditPlace}
            intlMessages={props.intlMessages}
            clients={props.clients}
            item={props.place} /> }
        {props.isModalRemovePlaceOpen && <ModalRemoveItem
            item={props.place}
            type ={props.intlMessages['placeSML']}
            intlMessages={props.intlMessages}
            removeItem={props.removePlace}
            closeModal={props.closeModalRemovePlace} /> }
    </div>
);

export default PlacesPage;