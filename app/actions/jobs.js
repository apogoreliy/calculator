import * as types from '../utils/constants';
import utils from '../utils/fetch';
import {handleSpinner} from './auth';

export const getJobs = () => {
    return dispatch =>{
        utils.getJobs(localStorage.getItem('calculator'), response => {
            dispatch({
                type: types.GET_JOBS,
                jobs : response.data
            });
        });
    }
};

export const addJob = job => {
    return dispatch =>{
        dispatch(handleSpinner(true));
        dispatch(closeModalAddJob());
        utils.addJob(localStorage.getItem('calculator'), job, item=>{
            dispatch(handleSpinner(false));

            dispatch({
                type: types.ADD_JOB,
                job: item.job
            });
        });
    }
};

export const openModalAddJob = () => {
    return {
        type : types.HANDLE_MODAL_ADD_JOB,
        isModalAddJobOpen : true
    }
};

export const closeModalAddJob = () => {
    return {
        type : types.HANDLE_MODAL_ADD_JOB,
        isModalAddJobOpen : false
    }
};

export const editJob = (jobId, job) => {
    job._id = jobId;
    return dispatch =>{
        dispatch(closeModalEditJob());
        dispatch({
            type: types.EDIT_JOB,
            job
        });

        utils.editJob(jobId, job);
    }
};

export const openModalEditJob = job=>{
    return {
        type : types.HANDLE_MODAL_EDIT_JOB,
        job,
        isModalEditJobOpen : true
    }
};

export const closeModalEditJob = ()=>{
    return {
        type : types.HANDLE_MODAL_EDIT_JOB,
        job : null,
        isModalEditJobOpen : false
    }
};

export const removeJob = job => {
    return dispatch =>{
        dispatch(closeModalRemoveJob());
        dispatch({
            type: types.REMOVE_JOB,
            job
        });

        utils.removeJob(localStorage.getItem('calculator'), job._id);
    }
};

export const openModalRemoveJob = job =>{
    return {
        type : types.HANDLE_MODAL_REMOVE_JOB,
        job,
        isModalRemoveJobOpen : true
    }
};

export const closeModalRemoveJob = ()=>{
    return {
        type : types.HANDLE_MODAL_REMOVE_JOB,
        job : null,
        isModalRemoveJobOpen : false
    }
};