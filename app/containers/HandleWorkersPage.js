import { connect } from 'react-redux';
import WorkersPage from '../components/workers/WorkersPage';
import * as actions from '../actions/workers';

const mapStateToProps = (state)=>{
    //state.workers.searchedworkers ||

    return{
        workers : state.workers.workers,
        isModalAddWorkerOpen : state.workers.isModalAddWorkerOpen || false,
        isModalEditWorkerOpen : state.workers.isModalEditWorkerOpen || false,
        isModalRemoveWorkerOpen : state.workers.isModalRemoveWorkerOpen || false,
        worker : state.workers.worker || null,
        intlMessages : state.intl
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        openModalAddWorker : ()=>{
            dispatch(actions.openModalAddWorker());
        },
        closeModalAddWorker : ()=>{
            dispatch(actions.closeModalAddWorker());
        },
        addWorker : worker =>{
            dispatch(actions.addWorker(worker));
        },
        openModalEditWorker : worker =>{
            dispatch(actions.openModalEditWorker(worker));
        },
        closeModalEditWorker : ()=>{
            dispatch(actions.closeModalEditWorker());
        },
        editWorker : (workerId, worker) =>{
            dispatch(actions.editWorker(workerId, worker));
        },
        openModalRemoveWorker : worker =>{
            dispatch(actions.openModalRemoveWorker(worker));
        },
        closeModalRemoveWorker : ()=>{
            dispatch(actions.closeModalRemoveWorker());
        },
        removeWorker : worker =>{
            dispatch(actions.removeWorker(worker));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkersPage);