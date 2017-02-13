import { connect } from 'react-redux';
import App from '../components/App';
import {getPlaces} from '../actions/places';
import {getClients} from '../actions/clients';
import {getWorkers} from '../actions/workers';
import {getJobs} from '../actions/jobs';
import {getCosts} from '../actions/costs';
import {getIntlMessages} from '../actions/intl';
import { auth, closeAuthModal, openAuthModalToSignIn, openAuthModalToSignUp, signOut } from '../actions/auth';

const mapStateToProps = (state, props) => {
    return {
        showAuthModal : state.auth.openSignInModal || state.auth.openSignUpModal,
        children : props.children,
        isSpinner : state.auth.isSpinner,
        intlMessages : state.intl,
        mode : state.auth.openSignUpModal,
        error : state.auth.error,
        loggedIn : state.auth.loggedIn
    }
};

const mapDispactchToProps = (dispatch)=>{
    return{
        getCosts : ()=>{
            dispatch(getCosts());
        },
        getJobs : ()=>{
          dispatch(getJobs());
        },
        getWorkers : ()=>{
            dispatch(getWorkers());
        },
        getPlaces : () => {
            dispatch(getPlaces());
        },
        getClients : ()=>{
            dispatch(getClients());
        },
        getIntlMessages : ()=>{
            dispatch(getIntlMessages());
        },
        auth: (type, login, password) => {
            dispatch(auth(type, login, password))
        },
        closeAuthModal : () => {
            dispatch(closeAuthModal())
        },
        openAuthModalToSignIn: () => {
            dispatch(openAuthModalToSignIn())
        },
        openAuthModalToSignUp : () => {
            dispatch(openAuthModalToSignUp())
        },
        signOut : () => {
            dispatch(signOut())
        }
    }
};

export default connect(mapStateToProps, mapDispactchToProps)(App);