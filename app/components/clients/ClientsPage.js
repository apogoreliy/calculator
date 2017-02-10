import React, { PropPlaces } from 'react';
import ButtonCustom from '../common/Button';
import ListItems from '../common/ListItems';
import ModalRemoveItem from '../common/ModalRemoveItem';
import ModalAddEditItem from './ModalAddEditItem';
import SearchFilter from '../common/SearchFilter';

const PlacesPage = (props)=>(
    <div className="container">
        <form className="form-inline">
            <ButtonCustom classSet="btn-primary" handleClick={props.openModalAddPlace} text={props.intlMessages['add_place']} icon="fa-plus-circle" />
            <SearchFilter onChange={props.searchPlace} placeholderText={props.intlMessages['search_place']} />
        </form>
        <ListItems
            intlMessages={props.intlMessages}
            items={props.places}
            openModalEditItem={props.openModalEditPlace}
            openModalRemoveItem={props.openModalRemovePlace} />
        {props.isModalAddPlaceOpen && <ModalAddEditItem
            header={props.intlMessages['addPlace']}
            handleItem={(initialPlace, place)=>props.addPlace(place)}
            closeModal={props.closeModalAddPlace}
            intlMessages={props.intlMessages}
            item={{address:'', date: new Date(), client : 0, _id : 0, description: ''}} /> }
        {props.isModalEditPlaceOpen && <ModalAddEditItem
            handleItem={props.editPlace}
            header={props.intlMessages['editPlace']}
            closeModal={props.closeModalEditPlace}
            intlMessages={props.intlMessages}
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