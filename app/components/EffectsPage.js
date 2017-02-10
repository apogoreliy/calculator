import React  from 'react';
import Button from './common/Button';
import ListItems from './common/ListItems';
import ModalRemoveItem from './common/ModalRemoveItem';
import ModalAddEditEffect from './ModalAddEditEffect';
import SearchFilter from './common/SearchFilter';
import FilterTypes from './common/FilterTypes';
import CountTimeBadge from './common/CountTimeBadge';
import FilterDates from './common/FilterDates';
import FilterEffects from './common/FilterEffects';
import Pagination from './common/Pagination';

const EffectsPage = (props)=>(
    <div className="container">
        <form className="form-inline">
            <Button text="Add effect" classSet="btn-warning" handleClick={props.openModalAddEffect} />
            <SearchFilter placeholderText="Search effects" onChange={props.searchEffect} />
            <CountTimeBadge time={props.time} />
            <FilterDates filterDates={props.filterDates} />
            <FilterEffects items={props.effects_for_names} handleItem={props.filterByEffectName}/>
            <FilterTypes types={props.types} filterTypes={props.filterTypes} />
        </form>
        <ListItems items={props.filteredEffects}
                   openModalEditItem={props.openModalEditEffect}
                   openModalRemoveItem={props.openModalRemoveEffect}
        />
        <Pagination changePage={props.changePage} totalPages={props.totalPages} maximumPages={props.maximumPages} currentPage={props.currentPage}/>
        {props.isModalAddEffectOpen && <ModalAddEditEffect
            header="Add item"
            types={props.types}
            handleItem={(effectId, effect)=>props.addEffect(effect)}
            closeModal={()=>props.closeModalAddEffect()}
            effect={{name:'', date: new Date(), time:'', type : 0, _id : 0, description: ''}}
        /> }

        {props.isModalEditEffectOpen && <ModalAddEditEffect
            header="Edit item"
            types={props.types}
            handleItem={(effectId, effect)=>props.editEffect(effectId, effect)}
            closeModal={()=>props.closeModalEditEffect()}
            effect={props.effect}
        /> }

        {props.isModalRemoveEffectOpen && <ModalRemoveItem
            item={props.effect}
            removeItem={(item)=>props.removeEffect(item)}
            closeModal={()=>props.closeModalRemoveEffect()}
        /> }
    </div>
);

export default EffectsPage;