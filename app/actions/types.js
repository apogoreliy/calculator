import * as types from '../utils/constants';
import utils from '../utils/fetch';
import service from '../utils/services';

export const getTypes = () => {
    return dispatch =>{
        utils.getTypes(localStorage.getItem('calculator'), response => {
            dispatch({
                type: types.GET_TYPES,
                types : response.data
            });
        });
    }
};

export const addType = type => {
    return dispatch =>{
        if(!service.isTypeExist(type)){
            dispatch({
                type: types.ADD_TYPE,
                newType : {name : type},
                isModalAddTypeOpen : false
            });

            utils.addType(localStorage.getItem('calculator'), type);
        }
    }
};

export const editType = (oldType, newType) => {
    return dispatch =>{
        if(!service.isTypeExist(newType)){
            dispatch({
                type: types.EDIT_TYPE,
                newType : {name : newType},
                type_name : null,
                isModalEditTypeOpen : false
            });

            if(oldType !== newType){
                dispatch({
                    type: types.UPDATE_TYPE_OF_EFFECTS,
                    newName : newType,
                    oldName : oldType
                });
            }

            utils.editType(localStorage.getItem('calculator'), oldType, newType);
        }
    }
};

export const removeType = type => {
    return dispatch =>{
        dispatch({
            type: types.REMOVE_TYPE,
            isModalRemoveTypeOpen : false,
            removed_type : type,
            type_name : null
        });

        dispatch({
            type: types.REMOVE_EFFECTS_BY_TYPE,
            type_name : type.name
        });

        utils.removeType(localStorage.getItem('calculator'), type);
    }
};

export const searchType = searchText=>{
    return {
        type : types.SEARCH_FILTER_TYPE,
        searchText
    }
};

export const openModalAddType = () => {
    return {
        type : types.HANDLE_MODAL_ADD_TYPE,
        isModalAddTypeOpen : true
    }
};

export const closeModalAddType = () => {
    return {
        type : types.HANDLE_MODAL_ADD_TYPE,
        isModalAddTypeOpen : false
    }
};

export const openModalEditType = type=>{
    return {
        type : types.HANDLE_MODAL_EDIT_TYPE,
        type_name : type.name,
        isModalEditTypeOpen : true
    }
};

export const closeModalEditType = ()=>{
    return {
        type : types.HANDLE_MODAL_EDIT_TYPE,
        type_name : null,
        isModalEditTypeOpen : false
    }
};

export const openModalRemoveType = type=>{
    return {
        type : types.HANDLE_MODAL_REMOVE_TYPE,
        type_name : type,
        isModalRemoveTypeOpen : true
    }
};

export const closeModalRemoveType = ()=>{
    return {
        type : types.HANDLE_MODAL_REMOVE_TYPE,
        type_name : null,
        isModalRemoveTypeOpen : false
    }
};