import React, {PropTypes, Component} from 'react';
import Navbar from './Navbar';
import AuthModal from '../components/AuthModal';
import Spinner from '../components/common/Spinner';

class App extends Component {
    componentDidMount() {
        this.props.getPlaces();
        this.props.getClients();
        this.props.getWorkers();
        this.props.getJobs();
        this.props.getCosts();
        this.props.getIntlMessages();
    }

    render() {
        let {intlMessages, showAuthModal, children, mode, error, auth, closeAuthModal,
            loggedIn, openAuthModalToSignIn, openAuthModalToSignUp, signOut} = this.props;

        return (
            <div>
                <Navbar intlMessages={intlMessages} loggedIn={loggedIn} openAuthModalToSignIn={openAuthModalToSignIn}
                        openAuthModalToSignUp={openAuthModalToSignUp} signOut={signOut} />
                { showAuthModal && <AuthModal intlMessages={intlMessages} mode={mode} error={error} auth ={auth} closeAuthModal={closeAuthModal}  /> }
                {children}
                <Spinner loaded={this.props.isSpinner}/>
            </div>
        )
    }
}

App.propTypes = {
    getCosts : PropTypes.func,
    getIntlMessages : PropTypes.func,
    getJobs : PropTypes.func,
    getWorkers : PropTypes.func,
    getPlaces: PropTypes.func,
    getClients : PropTypes.func,
    showAuthModal : PropTypes.bool,
    children : PropTypes.any,
    isSpinner:PropTypes.bool,
    intlMessages : PropTypes.object,
    mode: PropTypes.bool,
    error : PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ]),
    auth : PropTypes.func,
    closeAuthModal : PropTypes.func,
    loggedIn: PropTypes.bool,
    openAuthModalToSignIn : PropTypes.func,
    openAuthModalToSignUp: PropTypes.func,
    signOut: PropTypes.func
};

export default App;