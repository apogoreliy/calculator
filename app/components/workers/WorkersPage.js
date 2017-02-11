import React, { PropPlaces } from 'react';
import ButtonCustom from '../common/Button';
import WorkersList from './WorkersList';
import ModalRemoveItem from '../common/ModalRemoveItem';
import ModalAddEditWorker from './ModalAddEditWorker';
import SearchFilter from '../common/SearchFilter';

const WorkersPage = (props)=>(
    <div className="container">
        <form className="form-inline">
            <ButtonCustom classSet="btn-primary" handleClick={props.openModalAddWorker} text={props.intlMessages['addWorker']} icon="fa-plus-circle" />
            <SearchFilter onChange={props.searchWorker} placeholderText={props.intlMessages['searchWorker']} />
        </form>
        <WorkersList
            intlMessages={props.intlMessages}
            workers={props.workers}
            openModalEditItem={props.openModalEditWorker}
            openModalRemoveItem={props.openModalRemoveWorker} />
        {props.isModalAddWorkerOpen && <ModalAddEditWorker
            header={props.intlMessages['addWorker']}
            handleItem={(initialWorker, worker)=>props.addWorker(worker)}
            closeModal={props.closeModalAddWorker}
            intlMessages={props.intlMessages}
            item={{address:'', date: new Date(), name : '', _id : 0, description: ''}} /> }
        {props.isModalEditWorkerOpen && <ModalAddEditWorker
            handleItem={props.editWorker}
            header={props.intlMessages['editWorker']}
            closeModal={props.closeModalEditWorker}
            intlMessages={props.intlMessages}
            item={props.worker} /> }
        {props.isModalRemoveWorkerOpen && <ModalRemoveItem
            item={props.worker}
            type ={props.intlMessages['workerSML']}
            intlMessages={props.intlMessages}
            removeItem={props.removeWorker}
            closeModal={props.closeModalRemoveWorker} /> }
    </div>
);

export default WorkersPage;