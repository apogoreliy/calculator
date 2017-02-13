import React, { PropPlaces } from 'react';
import ButtonCustom from '../common/Button';
import CostsList from './CostsList';
import ModalRemoveItem from '../common/ModalRemoveItem';
import ModalAddEditCost from './ModalAddEditCost';
import SearchFilter from '../common/SearchFilter';

const CostsPage = (props)=>(
    <div className="container">
        <form className="form-inline">
            <ButtonCustom classSet="btn-primary" handleClick={props.openModalAddCost} text={props.intlMessages['addCost']} icon="fa-plus-circle" />
            <SearchFilter onChange={props.searchCost} placeholderText={props.intlMessages['searchCost']} />
        </form>
        <CostsList
            workers={props.workers}
            places={props.places}
            cost_types={props.cost_types}
            intlMessages={props.intlMessages}
            costs={props.costs}
            openModalEditItem={props.openModalEditCost}
            openModalRemoveItem={props.openModalRemoveCost} />
        {props.isModalAddCostOpen && <ModalAddEditCost
            workers={props.workers}
            places={props.places}
            cost_types={props.cost_types}
            header={props.intlMessages['addCost']}
            handleItem={(initialCost, cost)=>props.addCost(cost)}
            closeModal={props.closeModalAddCost}
            intlMessages={props.intlMessages}
            item={{total: 0, cost_type: 0, date: new Date(), place:0, worker:0, _id : 0, description: ''}} /> }
        {props.isModalEditCostOpen && <ModalAddEditCost
            workers={props.workers}
            places={props.places}
            cost_types={props.cost_types}
            handleItem={props.editCost}
            header={props.intlMessages['editCost']}
            closeModal={props.closeModalEditCost}
            intlMessages={props.intlMessages}
            item={props.cost} /> }
        {props.isModalRemoveCostOpen && <ModalRemoveItem
            item={props.cost}
            type ={props.intlMessages['costSML']}
            intlMessages={props.intlMessages}
            removeItem={props.removeCost}
            closeModal={props.closeModalRemoveCost} /> }
    </div>
);

export default CostsPage;