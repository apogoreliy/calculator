import * as types from '../utils/constants';
import utils from '../utils/fetch';

export const openAuthModalToSignIn = () => {
    return {
        type: types.OPEN_AUTH_MODAL_TO_SIGNIN,
        openSignInModal : true,
        openSignUpModal : false,
        error : false
    }
};

export const openAuthModalToSignUp = () => {
    return {
        type: types.OPEN_AUTH_MODAL_TO_SIGNUP,
        openSignUpModal : true,
        openSignInModal : false,
        error : false
    }
};

export const closeAuthModal = () => {
    return {
        type: types.CLOSE_AUTH_MODAL,
        openSignUpModal : false,
        openSignInModal : false,
        error : false
    }
};

export const auth = (type, login, password) => {
    return dispatch =>{
        utils.auth(type, login, password, response => {
            if(response.data.error){
                dispatch({
                    type: types.AUTH,
                    loggedIn : false,
                    error : response.data.error
                });
            }
            else if(response.data.token){
                dispatch(closeAuthModal());

                localStorage.setItem('calculator', response.data.token);

                dispatch({
                    type: types.AUTH,
                    loggedIn : true,
                    error : false
                });
            }
        });
    }
};

export const handleSpinner = (value)=>{
    return {
        type : types.HANDLE_SPINNER,
        isSpinner : value
    }
};

export const checkAuth = () => {
    return dispatch =>{
        let token = localStorage.getItem('calculator');
        if(token) {
            dispatch(handleSpinner(true));

            utils.checkAuth(token, response => {
                dispatch(handleSpinner(false));

                dispatch({
                    type: types.AUTH,
                    loggedIn : response.data
                });
            });
        }
        else{
            dispatch({
                type: types.AUTH,
                loggedIn : false
            });
        }
    }
};

export const signOut = () => {
    return dispatch => {
        localStorage.removeItem('calculator');

        dispatch({
            type: types.SIGN_OUT,
            loggedIn : false
        });
    }
};