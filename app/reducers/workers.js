import * as types from '../utils/constants';

export default (state = {}, action) => {
    switch (action.type) {
        case types.GET_WORKERS:
            return {...state, workers : action.workers};
        case types.ADD_WORKER:
            return {...state, workers : [...state.workers, action.worker]};
        case types.HANDLE_MODAL_ADD_WORKER:
            return {...state, isModalAddWorkerOpen : action.isModalAddWorkerOpen };
        case types.HANDLE_MODAL_EDIT_WORKER:
            return {...state, isModalEditWorkerOpen : action.isModalEditWorkerOpen, worker : action.worker };
        case types.EDIT_WORKER:
            let editedWorkers = state.workers.map( worker => worker._id === action.worker._id ? action.worker : worker);
            return {...state, workers : [...editedWorkers], worker : null};
        case types.HANDLE_MODAL_REMOVE_WORKER:
            return {...state, isModalRemoveWorkerOpen : action.isModalRemoveWorkerOpen, worker : action.worker
            };
        case types.REMOVE_WORKER:
            let removedWorkers = state.workers.filter( item => item._id !== action.worker._id);
            return {...state, workers : [...removedWorkers], worker : null};
    }
    return state;
};