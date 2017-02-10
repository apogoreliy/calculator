import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import WelcomePage from '../../../app/components/WelcomePage';

describe('WelcomePage' , () => {
    let component;

    beforeEach(() => {
        component = shallow(<WelcomePage />);
    });

    it('renders correct', () => {
        expect(component).to.exist;
    });

    it('has className container', () => {
        expect(component.find('.container')).to.exist;
    });

    it('has 2 children"', () => {
        expect(component.children()).to.have.length(2);
    });
});