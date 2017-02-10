import * as types from '../utils/constants';

export default (state = {}, action) => {
    switch (action.type) {
        case types.GET_TYPES:
            return Object.assign({}, state, {
                types : action.types
            });
        case types.HANDLE_MODAL_ADD_TYPE:
            return Object.assign({}, state, {
                isModalAddTypeOpen : action.isModalAddTypeOpen
            });
        case types.HANDLE_MODAL_EDIT_TYPE:
            return Object.assign({}, state, {
                isModalEditTypeOpen : action.isModalEditTypeOpen,
                type_name : action.type_name
            });
        case types.HANDLE_MODAL_REMOVE_TYPE:
            return Object.assign({}, state, {
                isModalRemoveTypeOpen : action.isModalRemoveTypeOpen,
                type_name : action.type_name
            });
        case types.ADD_TYPE:
            return Object.assign({}, state, {
                types : [...state.types, action.newType],
                isModalAddTypeOpen : action.isModalAddTypeOpen
            });

        case types.EDIT_TYPE:
            let editedTypes = state.types.map( type =>type.name === state.type_name ? action.newType : type);

            return Object.assign({}, state, {
                types : [...editedTypes],
                isModalEditTypeOpen : action.isModalEditTypeOpen,
                type_name : action.type_name
            });

        case types.REMOVE_TYPE:
            let removedTypes = state.types.filter( type =>type.name !== action.removed_type.name);

            return Object.assign({}, state, {
                types : [...removedTypes],
                isModalRemoveTypeOpen : action.isModalRemoveTypeOpen,
                type_name : action.type_name
            });
        case types.CHECK_DOUBLE_TYPE:
            return Object.assign({}, state, {
                types : [...state.types, action.newType],
                isModalAddTypeOpen : action.isModalAddTypeOpen
            });
        case types.SEARCH_FILTER_TYPE:
            let searchText = action.searchText.trim().toLowerCase();
            let searchedTypes = state.types.filter( type => -1 !== type.name.search( searchText));

            return Object.assign({}, state, {
                types : state.types,
                searchedTypes : searchText === '' ? null : [...searchedTypes]
            });
    }
    return state;
};