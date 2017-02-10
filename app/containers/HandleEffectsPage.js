import { connect } from 'react-redux';
import EffectsPage from '../components/EffectsPage';
import * as actions from '../actions/effects';
import * as constants from '../utils/constants';

const mapStateToProps = (state)=>{
    let totalPages = 0;
    let effects = state.effects.effects;

    if(effects) {
        if (effects.length > 0) {
            totalPages = ((effects.length - 1) / constants.COUNT_ITEMS_ON_PAGE) + 1;
            totalPages = totalPages - (totalPages % 1);
        }
    }

    return{
        effects,
        filteredEffects : state.effects.filteredEffects || effects,
        isModalAddEffectOpen : state.effects.isModalAddEffectOpen || false,
        isModalEditEffectOpen : state.effects.isModalEditEffectOpen || false,
        isModalRemoveEffectOpen : state.effects.isModalRemoveEffectOpen || false,
        effect : state.effects.effect || null,
        types : state.types.types,
        time : state.effects.time,
        effects_for_names: state.effects.effects,
        totalPages: totalPages,
        maximumPages : constants.COUNT_PAGES_IN_PAGINATION,
        currentPage : state.effects.page || 1
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        openModalAddEffect : ()=>{
            dispatch(actions.openModalAddEffect());
        },
        closeModalAddEffect : ()=>{
            dispatch(actions.closeModalAddEffect());
        },
        addEffect : (effect) =>{
            dispatch(actions.addEffect(effect));
        },
        editEffect : (effectId, effect) =>{
            dispatch(actions.editEffect(effectId, effect));
        },
        removeEffect : (effect) =>{
            dispatch(actions.removeEffect(effect));
        },
        openModalEditEffect : (name)=>{
            dispatch(actions.openModalEditEffect(name));
        },
        openModalRemoveEffect : (name)=>{
            dispatch(actions.openModalRemoveEffect(name));
        },
        closeModalEditEffect : ()=>{
            dispatch(actions.closeModalEditEffect());
        },
        closeModalRemoveEffect : ()=>{
            dispatch(actions.closeModalRemoveEffect());
        },
        searchEffect : text =>{
            dispatch(actions.searchEffect(text));
        },
        filterTypes : types =>{
            dispatch(actions.filterTypes(types));
        },
        filterDates : (startDate, endDate) =>{
            dispatch(actions.filterDates(startDate, endDate));
        },
        filterByEffectName : name=>{
            dispatch(actions.filterByEffectName(name));
        },
        changePage: page => {
            dispatch(actions.changePage(page));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EffectsPage);