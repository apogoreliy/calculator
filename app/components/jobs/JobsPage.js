import React, { PropPlaces } from 'react';
import ButtonCustom from '../common/Button';
import JobsList from './JobList';
import ModalRemoveItem from '../common/ModalRemoveItem';
import ModalAddEditJob from './ModalAddEditJob';
import SearchFilter from '../common/SearchFilter';

const JobsPage = props=>(
    <div className="container">
        <form className="form-inline">
            <ButtonCustom classSet="btn-primary" handleClick={props.openModalAddJob} text={props.intlMessages['addJob']} icon="fa-plus-circle" />
            <SearchFilter onChange={props.searchJob} placeholderText={props.intlMessages['searchJob']} />
        </form>
        <JobsList
            intlMessages={props.intlMessages}
            jobs={props.jobs}
            openModalEditItem={props.openModalEditJob}
            openModalRemoveItem={props.openModalRemoveJob} />
        {props.isModalAddJobOpen && <ModalAddEditJob
            header={props.intlMessages['addJob']}
            handleItem={(initialJob, job)=>props.addJob(job)}
            closeModal={props.closeModalAddJob}
            intlMessages={props.intlMessages}
            item={{price:'', unit:'', date: new Date(), name : '', _id : 0, description: ''}} /> }
        {props.isModalEditJobOpen && <ModalAddEditJob
            handleItem={props.editJob}
            header={props.intlMessages['editJob']}
            closeModal={props.closeModalEditJob}
            intlMessages={props.intlMessages}
            item={props.job} /> }
        {props.isModalRemoveJobOpen && <ModalRemoveItem
            item={props.job}
            type ={props.intlMessages['jobSML']}
            intlMessages={props.intlMessages}
            removeItem={props.removeJob}
            closeModal={props.closeModalRemoveJob} /> }
    </div>
);

export default JobsPage;