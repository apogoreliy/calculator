import { connect } from 'react-redux';
import CostsPage from '../components/costs/CostsPage';
import * as actions from '../actions/costs';

const mapStateToProps = state=>{
    return{
        costs : state.costs.costs,
        cost_types: state.costs.cost_types,
        isModalAddCostOpen : state.costs.isModalAddCostOpen || false,
        isModalEditCostOpen : state.costs.isModalEditCostOpen || false,
        isModalRemoveCostOpen : state.costs.isModalRemoveCostOpen || false,
        cost : state.costs.cost || null,
        intlMessages : state.intl,
        places : state.places.places,
        workers : state.workers.workers
    }
};

const mapDispatchToProps = dispatch=>{
    return {
        openModalAddCost : ()=>{
            dispatch(actions.openModalAddCost());
        },
        closeModalAddCost : ()=>{
            dispatch(actions.closeModalAddCost());
        },
        addCost : cost =>{
            dispatch(actions.addCost(cost));
        },
        openModalEditCost : cost =>{
            dispatch(actions.openModalEditCost(cost));
        },
        closeModalEditCost : ()=>{
            dispatch(actions.closeModalEditCost());
        },
        editCost : (costId, cost) =>{
            dispatch(actions.editCost(costId, cost));
        },
        openModalRemoveCost : cost =>{
            dispatch(actions.openModalRemoveCost(cost));
        },
        closeModalRemoveCost : ()=>{
            dispatch(actions.closeModalRemoveCost());
        },
        removeCost : cost =>{
            dispatch(actions.removeCost(cost));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CostsPage);