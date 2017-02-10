import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from '../../../app/components/App';
import HandleAuthModal from '../../../app/containers/HandleAuthModal';
import Navbar from '../../../app/components/Navbar';

describe('App' , () => {
    let component;

    beforeEach(() => {
        component = shallow(<App />);
    });

    it('renders correct', () => {
        expect(component).to.exist;
    });

    it('has HandleAuthModal element"', () => {
        expect(component.find(HandleAuthModal)).to.exist;
    });

    it('has Navbar element"', () => {
        expect(component.find(Navbar)).to.exist;
    });

});