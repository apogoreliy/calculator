import * as ActionCreators from '../../../app/actions/Store/index';
import * as ActionTypes from '../../../app/utils/constants';

//import sinon from 'sinon';
import { expect } from 'chai';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

import utils from '../../../app/utils/fetch';

describe('Actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('create an action to close DeleteModal component', () => {
        const actual = ActionCreators.closeDeleteModal();
        const expected = {
            type: ActionTypes.CLOSE_DELETE_MODAL,
            openDeleteCategoryModal : false,
            openDeleteProductModal : false,
            productID : null,
            categoryID : null
        };

        expect(actual).to.deep.equal(expected);
    });

    it('create an action to open ProductModal component', () => {
        const id = 10;
        const actual = ActionCreators.openEditProductModal(id);
        const expected = {
            type: ActionTypes.OPEN_EDIT_PRODUCT_MODAL,
            openEditProductModal : true,
            productID : id
        };

        expect(actual).to.deep.equal(expected);
    });

    it('create an action to open DeleteProductModal component', () => {
        const id = 10;
        const actual = ActionCreators.openDeleteProductModal(id);
        const expected = {
            type: ActionTypes.OPEN_DELETE_PRODUCT_MODAL,
            openDeleteProductModal : true,
            productID : id
        };

        expect(actual).to.deep.equal(expected);
    });

    it('create an action to open ProductModal component', () => {
        const actual = ActionCreators.openProductModal();
        const expected = {
            type: ActionTypes.OPEN_ADD_PRODUCT_MODAL,
            openAddProductModal : true
        };

        expect(actual).to.deep.equal(expected);
    });

    it('create an action to close ProductModal component', () => {
        const actual = ActionCreators.closeProductModal();
        const expected = {
            type: ActionTypes.CLOSE_PRODUCT_MODAL,
            openAddProductModal : false,
            openEditProductModal: false
        };

        expect(actual).to.deep.equal(expected);
    });

    it('create an action to select category', () => {
        const selectedCategory = 2;
        const actual = ActionCreators.selectCategory(selectedCategory);
        const expected = {
            type: ActionTypes.SELECT_CATEGORY,
            selectedCategory
        };

        expect(actual).to.deep.equal(expected);
    });

    it('create an action to open CategoryModal component', () => {
        const actual = ActionCreators.openCategoryModal();
        const expected = {
            type: ActionTypes.OPEN_ADD_CATEGORY_MODAL,
            openAddCategoryModal : true
        };

        expect(actual).to.deep.equal(expected);
    });

    it('create an action to close CategoryModal component', () => {
        const actual = ActionCreators.closeCategoryModal();
        const expected = {
            type: ActionTypes.CLOSE_CATEGORY_MODAL,
            openAddCategoryModal : false
        };

        expect(actual).to.deep.equal(expected);
    });

    it('create an action to open DeleteCategoryModal component', () => {
        const id = 10;
        const actual = ActionCreators.openDeleteCategoryModal(id);
        const expected = {
            type: ActionTypes.OPEN_DELETE_CATEGORY_MODAL,
            openDeleteCategoryModal : true,
            categoryID : id
        };

        expect(actual).to.deep.equal(expected);
    });

    /*
    it('create an action to remove category', () => {
        const id = 10;
        const actual = ActionCreators.removeCategory(id);
        const dispatch = sinon.spy();

        const categories = {

        };

        const expected = {
            type: ActionTypes.REMOVE_CATEGORY,
            categories: {cats : categories}
        };

        // we expect this to return a function since it is a thunk
        expect(typeof actual).to.equal('function');
        // then we simulate calling it with dispatch as the store would do
        actual(dispatch);
        // finally assert that the dispatch was called with our expected action
        expect(dispatch).to.have.been.calledWith(expected);
    });
*/

    it('create an action to fetch categories', () => {
        const categories = [
            { categoryID : 8, name : "Без категории"},
            { categoryID : 9, name : "phones"}
        ];

        nock('http://localhost:3000')
            .get('/get_categories')
            .reply(200, { categories: {cats : categories}});

        const expectedActions = [{
            type: ActionTypes.GET_CATEGORIES,
            categories: {cats : categories}
        }];

        const store = mockStore({ cats: categories });

        /*
        utils.fetchCategories(
            response => {
                dispatch({
                    type: GET_CATEGORIES,
                    categories: {cats : response.data}
                });
            }

        );*/
/*
        console.log(ActionCreators.fetchCategories()());

        return store.dispatch(ActionCreators.fetchCategories())
            .then(() => { // return of async actions
                expect(store.getState()).to.equal(expectedActions)
            });
*/
        /*
        return store.dispatch(ActionCreators.fetchCategories())
            .then(() => { // return of async actions
                expect(store.getActions()).to.equal(expectedActions)
            });

*/
        /*
        return store.dispatch(
            utils.fetchCategories( ActionCreators.fetchCategories()
                //.then(() => { // return of async actions
                    expect(store.getActions()).toEqual(expectedActions)
                //})
            ));
            */

//        const actual = ActionCreators.fetchCategories();
//        const dispatch = sinon.spy();
/*
        const expected = {
            type: ActionTypes.GET_CATEGORIES,
            categories: {cats : categories}
        };
*/

        // we expect this to return a function since it is a thunk
        //expect(typeof actual).to.equal('function');

        // then we simulate calling it with dispatch as the store would do
        //ActionCreators.fetchCategories()(dispatch);

        // finally assert that the dispatch was called with our expected action
        //expect(dispatch(actual)).to.have.been.calledWith(expected);
    });

});
