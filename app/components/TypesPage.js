import React, { PropTypes } from 'react';
import Button from './common/Button';
import ListItems from './common/ListItems';
import ModalRemoveItem from './common/ModalRemoveItem';
import ModalAddEditItem from './common/ModalAddEditItem';
import SearchFilter from './common/SearchFilter';

const TypesPage = (props)=>(
    <div className="container">
        <form className="form-inline">
            <Button classSet="btn-primary" handleClick={props.openModalAddType} text="Add type" />
            <SearchFilter onChange={props.searchType} placeholderText="Search type" />
        </form>
        <ListItems items={props.types}
                   openModalEditItem={props.openModalEditType}
                   openModalRemoveItem={props.openModalRemoveType} />
        {props.isModalAddTypeOpen && <ModalAddEditItem
                                                        header="Add item"
                                                        handleItem={(initialName, type)=>props.addType(type)}
                                                        closeModal={props.closeModalAddType}
                                                        item="" /> }
        {props.isModalEditTypeOpen && <ModalAddEditItem
                                                        handleItem={props.editType}
                                                        header="Edit item"
                                                        closeModal={props.closeModalEditType}
                                                        item={props.type_name} /> }
        {props.isModalRemoveTypeOpen && <ModalRemoveItem
                                                        item={props.type_name}
                                                        removeItem={props.removeType}
                                                        closeModal={props.closeModalRemoveType} /> }
    </div>
);

export default TypesPage;