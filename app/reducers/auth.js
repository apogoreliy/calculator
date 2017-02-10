import * as types from '../utils/constants';

export default (state = {}, action) => {
    switch (action.type) {
        case types.CLOSE_AUTH_MODAL:
        case types.OPEN_AUTH_MODAL_TO_SIGNUP:
        case types.OPEN_AUTH_MODAL_TO_SIGNIN:
            return Object.assign({}, state, {
                openSignInModal : action.openSignInModal,
                openSignUpModal : action.openSignUpModal,
                error : action.error
            });
        case types.AUTH:
            return Object.assign({}, state, {
                loggedIn : action.loggedIn,
                error : action.error
            });
        case types.SIGN_OUT:
            return Object.assign({}, state, {
                loggedIn : action.loggedIn
            });
        case types.HANDLE_SPINNER:
            return Object.assign({}, state, {
                isSpinner : action.isSpinner
            });
    }
    return state;
};