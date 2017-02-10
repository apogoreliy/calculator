import { connect } from 'react-redux';
import TypesPage from '../components/TypesPage';
import * as actions from '../actions/types';

const mapStateToProps = (state)=>{
    return{
        types : state.types.searchedTypes || state.types.types,
        isModalAddTypeOpen : state.types.isModalAddTypeOpen || false,
        isModalEditTypeOpen : state.types.isModalEditTypeOpen || false,
        isModalRemoveTypeOpen : state.types.isModalRemoveTypeOpen || false,
        type_name : state.types.type_name || null
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        openModalAddType : ()=>{
            dispatch(actions.openModalAddType());
        },
        closeModalAddType : ()=>{
            dispatch(actions.closeModalAddType());
        },
        addType : (type) =>{
            dispatch(actions.addType(type));
        },
        editType : (oldType, newType) =>{
            dispatch(actions.editType(oldType, newType));
        },
        removeType : (type) =>{
            dispatch(actions.removeType(type));
        },
        openModalEditType : (name)=>{
            dispatch(actions.openModalEditType(name));
        },
        openModalRemoveType : (name)=>{
            dispatch(actions.openModalRemoveType(name));
        },
        closeModalEditType : ()=>{
            dispatch(actions.closeModalEditType());
        },
        closeModalRemoveType : ()=>{
            dispatch(actions.closeModalRemoveType());
        },
        searchType : type=>{
            dispatch(actions.searchType(type));
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TypesPage);