import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
/*
import Header from '../../../app/components/Store/Header';

describe('Header' , () => {
    let wrapper;
    const addCategory = sinon.spy();
    const addProduct = sinon.spy();

    beforeEach(() => {
        wrapper = shallow(
            <Header
                addCategory={addCategory}
                addProduct={addProduct}
            />
        );
    });

    it('renders correct', () => {
        expect(wrapper).to.exist;
    });

    it('has className header', () => {
        expect(wrapper.find('.header')).to.exist;
    });

    it('has 4 children', () => {
        expect(wrapper.find('.header').children()).to.have.length(4);
    });

    it('has button with text "Добавить товар"', () => {
        const text = "Добавить товар";
        expect(wrapper.find('.product-btn').text()).to.equal(text);
    });

    it('has button with text "Добавить категорию"', () => {
        const text = "Добавить категорию";
        expect(wrapper.find('.category-btn').text()).to.equal(text);
    });

    it('has span tag', () => {
        const text = 'MY APP';
        expect(wrapper.find('span').text()).to.equal(text);
    });

    it('call addProduct when clicked', () => {
        wrapper.find('.product-btn').simulate('click');
        expect(addProduct.calledOnce).to.equal(true);
    });

    it('call addCategory when clicked', () => {
        wrapper.find('.category-btn').simulate('click');
        expect(addCategory.calledOnce).to.equal(true);
    });
});
    */