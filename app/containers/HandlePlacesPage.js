import { connect } from 'react-redux';
import PlacesPage from '../components/places/PlacesPage';
import * as actions from '../actions/places';

const mapStateToProps = (state)=>{
    //state.places.searchedPlaces ||

    return{
        places : state.places.places,
        isModalAddPlaceOpen : state.places.isModalAddPlaceOpen || false,
        isModalEditPlaceOpen : state.places.isModalEditPlaceOpen || false,
        isModalRemovePlaceOpen : state.places.isModalRemovePlaceOpen || false,
        place : state.places.place || null,
        intlMessages : state.intl,
        clients : state.clients.clients
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        openModalAddPlace : ()=>{
            dispatch(actions.openModalAddPlace());
        },
        closeModalAddPlace : ()=>{
            dispatch(actions.closeModalAddPlace());
        },
        addPlace : place =>{
            dispatch(actions.addPlace(place));
        },
        openModalEditPlace : place =>{
            dispatch(actions.openModalEditPlace(place));
        },
        closeModalEditPlace : ()=>{
            dispatch(actions.closeModalEditPlace());
        },
        editPlace : (placeId, place) =>{
            dispatch(actions.editPlace(placeId, place));
        },
        openModalRemovePlace : place =>{
            dispatch(actions.openModalRemovePlace(place));
        },
        closeModalRemovePlace : ()=>{
            dispatch(actions.closeModalRemovePlace());
        },
        removePlace : place =>{
            dispatch(actions.removePlace(place));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacesPage);