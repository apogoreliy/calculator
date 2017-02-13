import * as types from '../utils/constants';
import utils from '../utils/fetch';
import {handleSpinner} from './auth';

export const getCosts = () => {
    return dispatch =>{
        utils.getCosts(localStorage.getItem('calculator'), response => {
            dispatch({
                type: types.GET_COSTS,
                costs : response.data.costs,
                cost_types: response.data.cost_types
            });
        });
    }
};

export const addCost = cost => {
    return dispatch =>{
        dispatch(handleSpinner(true));
        dispatch(closeModalAddCost());
        utils.addCost(localStorage.getItem('calculator'), cost, item=>{
            dispatch(handleSpinner(false));

            dispatch({
                type: types.ADD_COST,
                cost: item.cost
            });
        });
    }
};

export const openModalAddCost = () => {
    return {
        type : types.HANDLE_MODAL_ADD_COST,
        isModalAddCostOpen : true
    }
};

export const closeModalAddCost = () => {
    return {
        type : types.HANDLE_MODAL_ADD_COST,
        isModalAddCostOpen : false
    }
};

export const editCost = (costId, cost) => {
    cost._id = costId;
    return dispatch =>{
        dispatch(closeModalEditCost());
        dispatch({
            type: types.EDIT_COST,
            cost
        });

        utils.editCost(costId, cost);
    }
};

export const openModalEditCost = cost=>{
    return {
        type : types.HANDLE_MODAL_EDIT_COST,
        cost,
        isModalEditCostOpen : true
    }
};

export const closeModalEditCost = ()=>{
    return {
        type : types.HANDLE_MODAL_EDIT_COST,
        cost : null,
        isModalEditCostOpen : false
    }
};

export const removeCost = cost => {
    return dispatch =>{
        dispatch(closeModalRemoveCost());
        dispatch({
            type: types.REMOVE_COST,
            cost
        });

        utils.removeCost(localStorage.getItem('calculator'), cost._id);
    }
};

export const openModalRemoveCost = cost =>{
    return {
        type : types.HANDLE_MODAL_REMOVE_COST,
        cost,
        isModalRemoveCostOpen : true
    }
};

export const closeModalRemoveCost = ()=>{
    return {
        type : types.HANDLE_MODAL_REMOVE_COST,
        cost : null,
        isModalRemoveCostOpen : false
    }
};