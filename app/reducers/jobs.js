import * as types from '../utils/constants';

export default (state = {}, action) => {
    switch (action.type) {
        case types.GET_JOBS:
            return {...state, jobs : action.jobs};
        case types.ADD_JOB:
            return {...state, jobs : [...state.jobs, action.job]};
        case types.HANDLE_MODAL_ADD_JOB:
            return {...state, isModalAddJobOpen : action.isModalAddJobOpen };
        case types.HANDLE_MODAL_EDIT_JOB:
            return {...state, isModalEditJobOpen : action.isModalEditJobOpen, job : action.job };
        case types.EDIT_JOB:
            let editedJobs = state.jobs.map( job => job._id === action.job._id ? action.job : job);
            return {...state, jobs : [...editedJobs], job : null};
        case types.HANDLE_MODAL_REMOVE_JOB:
            return {...state, isModalRemoveJobOpen : action.isModalRemoveJobOpen, job : action.job
            };
        case types.REMOVE_JOB:
            let removedJobs = state.jobs.filter( item => item._id !== action.job._id);
            return {...state, jobs : [...removedJobs], job : null};
    }
    return state;
};