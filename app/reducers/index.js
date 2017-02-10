import { combineReducers } from 'redux';
import auth from './auth';
import intl from './intl';
import places from './places';

import types from './types';
import effects from './effects';

export default combineReducers({
    auth,
    types,
    effects,
    intl,
    places
});