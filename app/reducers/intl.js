import * as types from '../utils/constants';
import intl from '../../server/intl';

export default (state = intl, action) => {
    switch (action.type) {
        case types.GET_INTL_MESSAGES:
            return {...state[action.locale]};
    }
    return state;
};