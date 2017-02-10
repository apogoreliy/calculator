import React from 'react';
import Button from './common/Button';

export default ({intlMessages, loggedIn, openAuthModalToSignIn, openAuthModalToSignUp, signOut}) => (
    <div className="auth-panel">
        { loggedIn ? <Button classSet="btn-primary" handleClick={signOut} icon="fa-sign-out" text={intlMessages['sign_out']}/> :
            <div>
                <Button classSet="btn-primary btn-margin-left" handleClick={openAuthModalToSignIn} icon="fa-sign-in" text={intlMessages['sign_in']}/>
                <Button classSet="btn-primary btn-margin-left" handleClick={openAuthModalToSignUp} icon="fa-user-plus" text={intlMessages['sign_up']}/>
            </div>
        }
    </div>
);