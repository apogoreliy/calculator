import * as types from '../utils/constants';
import utils from '../utils/fetch';
import {handleSpinner} from './auth';

export const getPlaces = () => {
    return dispatch =>{
        utils.getPlaces(localStorage.getItem('calculator'), response => {
            dispatch({
                type: types.GET_PLACES,
                places : response.data
            });
        });
    }
};

export const addPlace = place => {
    return dispatch =>{
        dispatch(handleSpinner(true));
        dispatch(closeModalAddPlace());
        utils.addPlace(localStorage.getItem('calculator'), place, item=>{
            dispatch(handleSpinner(false));

            dispatch({
                type: types.ADD_PLACE,
                place: item.place
            });
        });
    }
};

export const openModalAddPlace = () => {
    return {
        type : types.HANDLE_MODAL_ADD_PLACE,
        isModalAddPlaceOpen : true
    }
};

export const closeModalAddPlace = () => {
    return {
        type : types.HANDLE_MODAL_ADD_PLACE,
        isModalAddPlaceOpen : false
    }
};

export const editPlace = (placeId, place) => {
    place._id = placeId;
    return dispatch =>{
        dispatch(closeModalEditPlace());
        dispatch({
            type: types.EDIT_PLACE,
            place
        });

        utils.editPlace(placeId, place);
    }
};

export const openModalEditPlace = place=>{
    return {
        type : types.HANDLE_MODAL_EDIT_PLACE,
        place : place,
        isModalEditPlaceOpen : true
    }
};

export const closeModalEditPlace = ()=>{
    return {
        type : types.HANDLE_MODAL_EDIT_PLACE,
        place : null,
        isModalEditPlaceOpen : false
    }
};

export const removePlace = place => {
    return dispatch =>{
        dispatch(closeModalRemovePlace());
        dispatch({
            type: types.REMOVE_PLACE,
            place
        });

        utils.removePlace(localStorage.getItem('calculator'), place._id);
    }
};

export const openModalRemovePlace = place =>{
    return {
        type : types.HANDLE_MODAL_REMOVE_PLACE,
        place,
        isModalRemovePlaceOpen : true
    }
};

export const closeModalRemovePlace = ()=>{
    return {
        type : types.HANDLE_MODAL_REMOVE_PLACE,
        place : null,
        isModalRemovePlaceOpen : false
    }
};

export const searchType = searchText=>{
    return {
        type : types.SEARCH_FILTER_TYPE,
        searchText
    }
};