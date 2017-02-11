import * as types from '../utils/constants';
import utils from '../utils/fetch';
import {handleSpinner} from './auth';

export const getWorkers = () => {
    return dispatch =>{
        utils.getWorkers(localStorage.getItem('calculator'), response => {
            dispatch({
                type: types.GET_WORKERS,
                workers : response.data
            });
        });
    }
};

export const addWorker = worker => {
    return dispatch =>{
        dispatch(handleSpinner(true));
        dispatch(closeModalAddWorker());
        utils.addWorker(localStorage.getItem('calculator'), worker, item=>{
            dispatch(handleSpinner(false));

            dispatch({
                type: types.ADD_WORKER,
                worker: item.worker
            });
        });
    }
};

export const openModalAddWorker = () => {
    return {
        type : types.HANDLE_MODAL_ADD_WORKER,
        isModalAddWorkerOpen : true
    }
};

export const closeModalAddWorker = () => {
    return {
        type : types.HANDLE_MODAL_ADD_WORKER,
        isModalAddWorkerOpen : false
    }
};

export const editWorker = (workerId, worker) => {
    worker._id = workerId;
    return dispatch =>{
        dispatch(closeModalEditWorker());
        dispatch({
            type: types.EDIT_WORKER,
            worker
        });

        utils.editWorker(workerId, worker);
    }
};

export const openModalEditWorker = worker=>{
    return {
        type : types.HANDLE_MODAL_EDIT_WORKER,
        worker,
        isModalEditWorkerOpen : true
    }
};

export const closeModalEditWorker = ()=>{
    return {
        type : types.HANDLE_MODAL_EDIT_WORKER,
        worker : null,
        isModalEditWorkerOpen : false
    }
};

export const removeWorker = worker => {
    return dispatch =>{
        dispatch(closeModalRemoveWorker());
        dispatch({
            type: types.REMOVE_WORKER,
            worker
        });

        utils.removeWorker(localStorage.getItem('calculator'), worker._id);
    }
};

export const openModalRemoveWorker = worker =>{
    return {
        type : types.HANDLE_MODAL_REMOVE_WORKER,
        worker,
        isModalRemoveWorkerOpen : true
    }
};

export const closeModalRemoveWorker = ()=>{
    return {
        type : types.HANDLE_MODAL_REMOVE_WORKER,
        worker : null,
        isModalRemoveWorkerOpen : false
    }
};