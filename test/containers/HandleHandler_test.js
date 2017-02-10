import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import HandleHandler from '../../app/containers/Store/HandleHeader';
import {storeFake} from '../storeFake'
/*
describe('HandleHandler' , () => {
    let component;

    beforeEach(() => {
        const store = storeFake({});
        const wrapper = shallow(
            <Provider store={store}>
                <HandleHeader />
            </Provider>
        );

        component = wrapper.find(HandleHandler);
    });

    it('renders correct', () => {
        expect(component).to.exist;
    });
});
    */