import React, {PropTypes} from 'react';
import AuthPanel from '../components/AuthPanel';
import {Link} from 'react-router';

const Navbar = ({intlMessages, loggedIn, openAuthModalToSignIn, openAuthModalToSignUp, signOut}) => (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar">{}</span>
                        <span className="icon-bar">{}</span>
                        <span className="icon-bar">{}</span>
                    </button>
                    <Link className="navbar-brand" to="/">Calculator</Link>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/places" activeClassName="active">{intlMessages.places}</Link>
                        </li>
                        <li>
                            <Link to="/clients" activeClassName="active">{intlMessages.clients}</Link>
                        </li>
                        <li>
                            <Link to="/workers" activeClassName="active">{intlMessages.workers}</Link>
                        </li>
                        <li>
                            <Link to="/jobs" activeClassName="active">{intlMessages.jobs}</Link>
                        </li>
                        <li>
                            <Link to="/costs" activeClassName="active">{intlMessages.costs}</Link>
                        </li>
                    </ul>
                    <AuthPanel intlMessages={intlMessages} loggedIn={loggedIn} openAuthModalToSignIn={openAuthModalToSignIn}
                               openAuthModalToSignUp={openAuthModalToSignUp} signOut={signOut} />
                </div>
            </div>
        </nav>
);

export default Navbar;