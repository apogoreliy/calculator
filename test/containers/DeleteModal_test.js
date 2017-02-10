import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import DeleteModal from '../../app/components/Store/DeleteModal';
import {storeFake} from '../storeFake'
/*
describe('DeleteModal' , () => {
    let component;

    beforeEach(() => {
        const store = storeFake({});
        const wrapper = shallow(
            <Provider store={store}>
                <DeleteModal />
            </Provider>
        );

        component = wrapper.find(DeleteModal);
    });

    it('renders correct', () => {
        expect(component).to.exist;
    });
});
    */