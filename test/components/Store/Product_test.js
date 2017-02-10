import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Product from '../../../app/components/Store/Product';

/*
describe('Product' , () => {
    let wrapper;
    const edit = sinon.spy();
    const remove = sinon.spy();
    const id = '10';
    const name = "test";
    const price = '50';
    const purchasePrice = '100';

    beforeEach(() => {
        wrapper = shallow(
            <Product id={id}
                     name={name}
                     price={price}
                     purchasePrice={purchasePrice}
                     edit={edit}
                     remove={remove}
            />
        );
    });

    it('renders correct', () => {
        expect(wrapper).to.exist;
    });

    it('has a button with className product-btn', () => {
        expect(wrapper.find('.product-btn')).to.exist;
    });

    it('has 5 td children', () => {
        expect(wrapper.find('tr').children()).to.have.length(5);
    });

    it('has 2 button children', () => {
        expect(wrapper.find('.product-buttons').children()).to.have.length(2);
    });

    it('call remove when clicked', () => {
        wrapper.find('.product-btn').simulate('click');
        expect(remove.calledOnce).to.equal(true);
    });

    it('call edit when clicked', () => {
        wrapper.find('.edit-product').simulate('click');
        expect(edit.calledOnce).to.equal(true);
    });

    it('has items', () => {
        expect(wrapper.find('td').at(0).text()).to.equal(id);
        expect(wrapper.find('td').at(1).text()).to.equal(name);
        expect(wrapper.find('td').at(2).text()).to.equal(purchasePrice);
        expect(wrapper.find('td').at(3).text()).to.equal(price);
    });

});
    */