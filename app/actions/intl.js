import * as types from '../utils/constants';

export const getIntlMessages = (locale='ru') => {
    return {
        type: types.GET_INTL_MESSAGES,
        locale
    }
};