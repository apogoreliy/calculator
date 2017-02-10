import * as types from '../utils/constants';
import utils from '../utils/fetch';
import {handleSpinner} from './auth';

export const getEffects = () => {
    return dispatch =>{
        utils.getEffects(localStorage.getItem('calculator'), response => {
            dispatch({
                type: types.GET_EFFECTS,
                effects : response.data
            });

            dispatch(countEffectsTime());
        });
    }
};

export const addEffect = effect => {
    return dispatch =>{
        dispatch(handleSpinner(true));
        dispatch(closeModalAddEffect());

        utils.addEffect(localStorage.getItem('calculator'), effect, item=>{
            dispatch(handleSpinner(false));

            dispatch({
                type: types.ADD_EFFECT,
                effect: item.effect
            });

            dispatch(countEffectsTime());
        });
    }
};

export const editEffect = (effectId, effect) => {
    effect._id = effectId;
    return dispatch =>{
        dispatch({
            type: types.EDIT_EFFECT,
            effect,
            isModalEditEffectOpen : false
        });

        dispatch(countEffectsTime());

        utils.editEffect(effectId, effect);
    }
};

export const removeEffect = effect => {
    return dispatch =>{
        dispatch({
            type: types.REMOVE_EFFECT,
            isModalRemoveEffectOpen : false,
            removed_effect : effect
        });

        dispatch(countEffectsTime());

        utils.removeEffect(localStorage.getItem('calculator'), effect);
    }
};

export const filterTypes = items =>{
    return dispatch =>{
        dispatch({
            type : types.FILTER_EFFECTS,
            filteredTypes : items
        });

        dispatch(countEffectsTime());
    }
};

export const searchEffect = text =>{
    return dispatch =>{
        dispatch({
            type : types.FILTER_EFFECTS,
            text
        });

        dispatch(countEffectsTime());
    }
};

export const filterDates = (startDate, endDate)=>{
    return dispatch => {
        dispatch({
            type: types.FILTER_EFFECTS,
            startDate,
            endDate
        });

        dispatch(countEffectsTime());
    }
};

export const filterByEffectName = name=>{
    return {
        type : types.FILTER_EFFECTS,
        filterName : name
    }
};

export const countEffectsTime = () =>{
    return {
        type : types.COUNT_EFFECTS_TIME
    }
};

export const openModalAddEffect = () => {
    return {
        type : types.HANDLE_MODAL_ADD_EFFECT,
        isModalAddEffectOpen : true
    }
};

export const closeModalAddEffect = () => {
    return {
        type : types.HANDLE_MODAL_ADD_EFFECT,
        isModalAddEffectOpen : false
    }
};

export const openModalEditEffect = effect=>{
    return {
        type : types.HANDLE_MODAL_EDIT_EFFECT,
        effect : effect,
        isModalEditEffectOpen : true
    }
};

export const closeModalEditEffect = ()=>{
    return {
        type : types.HANDLE_MODAL_EDIT_EFFECT,
        effect : null,
        isModalEditEffectOpen : false
    }
};

export const openModalRemoveEffect = effect=>{
    return {
        type : types.HANDLE_MODAL_REMOVE_EFFECT,
        effect : effect,
        isModalRemoveEffectOpen : true
    }
};

export const closeModalRemoveEffect = ()=>{
    return {
        type : types.HANDLE_MODAL_REMOVE_EFFECT,
        effect : null,
        isModalRemoveEffectOpen : false
    }
};

export const changePage = page => {
    return {
        type: types.FILTER_EFFECTS,
        page
    }
};