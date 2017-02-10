import * as types from '../utils/constants';
import services from '../utils/services';
import * as constants from '../utils/constants';

export default (state = {}, action) => {
    switch (action.type) {
        case types.GET_EFFECTS:
            return Object.assign({}, state, {
                effects : action.effects
            });

        case types.HANDLE_MODAL_ADD_EFFECT:
            return Object.assign({}, state, {
                isModalAddEffectOpen : action.isModalAddEffectOpen
            });

        case types.HANDLE_MODAL_EDIT_EFFECT:
            return Object.assign({}, state, {
                isModalEditEffectOpen : action.isModalEditEffectOpen,
                effect : action.effect
            });

        case types.HANDLE_MODAL_REMOVE_EFFECT:
            return Object.assign({}, state, {
                isModalRemoveEffectOpen : action.isModalRemoveEffectOpen,
                effect : action.effect
            });

        case types.ADD_EFFECT:
            return Object.assign({}, state, {
                effects : [...state.effects, action.effect]
            });

        case types.UPDATE_TYPE_OF_EFFECTS:
            let updatedEffects = state.effects.map( effect => {
                if(effect.type === action.oldName){
                    effect.type = action.newName;
                }
                return effect;
            });

            return Object.assign({}, state, {
                effects : [...updatedEffects]
            });

        case types.EDIT_EFFECT:
            let editedEffects = state.effects.map( effect => effect._id === state.effect._id ? action.effect : effect);

            return Object.assign({}, state, {
                effects : [...editedEffects],
                isModalEditEffectOpen : action.isModalEditEffectOpen,
                effect : action.effect
            });

        case types.FILTER_EFFECTS:
            let searchText = action.text !== undefined ? action.text.trim().toLowerCase() : state.searchText || null;
            let filteredTypes = action.filteredTypes !== undefined ? ( action.filteredTypes !== '' ? action.filteredTypes.split(','): null ) : state.filteredTypes || null;
            let filteredDates = action.startDate !== undefined && action.endDate !== undefined ? {startDate: action.startDate, endDate: action.endDate} : state.filteredDates || null;
            let filteredName = action.filterName !== undefined ? action.filterName : action.filterName === '' ? null : state.filteredName || null;
            let from, to;
            let pageFilter = action.page !== undefined ? action.page : state.page || 1;

            if(filteredDates){
                from = new Date(filteredDates.startDate);
                to = new Date(filteredDates.endDate);
            }

            let filteredEffects = state.effects.filter( (item, index) => {
                let d = new Date(item.date), checkDates;

                if(filteredDates){
                    checkDates = d.getTime() >= from.getTime() && d.getTime() <= to.getTime();
                }

                if(searchText && filteredTypes && filteredDates && filteredName && pageFilter){
                    return (
                        -1 !== item.name.search(searchText) &&
                        services.in_array(item.type, filteredTypes) &&
                        checkDates && item.name === filteredName
                    );
                }
                else if(searchText){
                    return -1 !== item.name.search(searchText);
                }
                else if(filteredTypes){
                    return services.in_array(item.type, filteredTypes);
                }
                else if(filteredDates){
                    return checkDates;
                }
                else if(filteredName){
                    return item.name === filteredName;
                }
                else if(pageFilter){
                    //console.log(index, pageFilter*10, index < pageFilter*10, index + index*pageFilter*10);
                    return index < pageFilter*10;
                }
            });

            //console.log('filteredEffects', filteredEffects.length);

            return Object.assign({}, state, {
                effects : state.effects,
                filteredEffects : filteredTypes || searchText || filteredDates || filteredName || pageFilter ? [...filteredEffects] : null,
                searchText,
                filteredTypes,
                filteredDates,
                filteredName,
                page : pageFilter
            });

        case types.REMOVE_EFFECTS_BY_TYPE:
            let removedEffectsByType = state.effects.filter( item => item.type !== action.type_name);

            return Object.assign({}, state, {
                effects : [...removedEffectsByType]
            });

        case types.REMOVE_EFFECT:
            let removedEffects = state.effects.filter( item => item._id !== action.removed_effect._id);

            return Object.assign({}, state, {
                effects : [...removedEffects],
                isModalRemoveEffectOpen : action.isModalRemoveEffectOpen,
                effect : action.effect
            });

        case types.COUNT_EFFECTS_TIME:
            let time = 0, arr = state.filteredEffects || state.effects;
            for(let j in arr){
                time += parseInt(arr[j].time);
            }

            return Object.assign({}, state, { time });
    }
    return state;
};