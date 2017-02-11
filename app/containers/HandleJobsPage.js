import { connect } from 'react-redux';
import JobsPage from '../components/jobs/JobsPage';
import * as actions from '../actions/jobs';

const mapStateToProps = (state)=>{
    //state.jobs.searchedjobs ||

    return{
        jobs : state.jobs.jobs,
        isModalAddJobOpen : state.jobs.isModalAddJobOpen || false,
        isModalEditJobOpen : state.jobs.isModalEditJobOpen || false,
        isModalRemoveJobOpen : state.jobs.isModalRemoveJobOpen || false,
        job : state.jobs.job || null,
        intlMessages : state.intl
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        openModalAddJob : ()=>{
            dispatch(actions.openModalAddJob());
        },
        closeModalAddJob : ()=>{
            dispatch(actions.closeModalAddJob());
        },
        addJob : job =>{
            dispatch(actions.addJob(job));
        },
        openModalEditJob : job =>{
            dispatch(actions.openModalEditJob(job));
        },
        closeModalEditJob : ()=>{
            dispatch(actions.closeModalEditJob());
        },
        editJob : (jobId, job) =>{
            dispatch(actions.editJob(jobId, job));
        },
        openModalRemoveJob : job =>{
            dispatch(actions.openModalRemoveJob(job));
        },
        closeModalRemoveJob : ()=>{
            dispatch(actions.closeModalRemoveJob());
        },
        removeJob : job =>{
            dispatch(actions.removeJob(job));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(JobsPage);