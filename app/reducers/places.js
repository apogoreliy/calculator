import * as types from '../utils/constants';

export default (state = {}, action) => {
    switch (action.type) {
        case types.GET_PLACES:
            return {...state, places : action.places};
        case types.ADD_PLACE:
            return {...state, places : [...state.places, action.place]};
        case types.HANDLE_MODAL_ADD_PLACE:
            return {...state, isModalAddPlaceOpen : action.isModalAddPlaceOpen };
        case types.HANDLE_MODAL_EDIT_PLACE:
            return {...state, isModalEditPlaceOpen : action.isModalEditPlaceOpen, place : action.place };
        case types.EDIT_PLACE:
            let editedPlaces = state.places.map( place => place._id === action.place._id ? action.place : place);
            return {...state, places : [...editedPlaces], place : null};
        case types.HANDLE_MODAL_REMOVE_PLACE:
            return {...state, isModalRemovePlaceOpen : action.isModalRemovePlaceOpen, place : action.place
            };
        case types.REMOVE_PLACE:
            let removedPlaces = state.places.filter( item => item._id !== action.place._id);
            return {...state, places : [...removedPlaces], place : null};
    }
    return state;
};