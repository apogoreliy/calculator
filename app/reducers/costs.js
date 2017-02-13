import * as types from '../utils/constants';

export default (state = {}, action) => {
    switch (action.type) {
        case types.GET_COSTS:
            return {...state, costs : action.costs, cost_types: action.cost_types};
        case types.ADD_COST:
            return {...state, costs : [...state.costs, action.cost]};
        case types.HANDLE_MODAL_ADD_COST:
            return {...state, isModalAddCostOpen : action.isModalAddCostOpen };
        case types.HANDLE_MODAL_EDIT_COST:
            return {...state, isModalEditCostOpen : action.isModalEditCostOpen, cost : action.cost };
        case types.EDIT_COST:
            let editedCosts = state.costs.map( cost => cost._id === action.cost._id ? action.cost : cost);
            return {...state, costs : [...editedCosts], cost : null};
        case types.HANDLE_MODAL_REMOVE_COST:
            return {...state, isModalRemoveCostOpen : action.isModalRemoveCostOpen, cost : action.cost
            };
        case types.REMOVE_COST:
            let removedCosts = state.costs.filter( item => item._id !== action.cost._id);
            return {...state, costs : [...removedCosts], cost : null};
    }
    return state;
};