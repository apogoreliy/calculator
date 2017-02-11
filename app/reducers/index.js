import { combineReducers } from 'redux';
import auth from './auth';
import intl from './intl';
import places from './places';
import clients from './clients';
import workers from './workers';
import jobs from './jobs';

import effects from './effects';

export default combineReducers({
    auth,
    intl,
    places,
    clients,
    workers,
    jobs
});