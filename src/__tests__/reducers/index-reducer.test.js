import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import shirtListReducer from '../../reducers/shirt-list-reducer';

describe("rootReducer", () =>{
  let store = createStore(rootReducer)

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterShirtList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of shirtListReducer matches root reducer', () => {
    expect(store.getState().masterShirtList).toEqual(shirtListReducer(undefined, { type: null }));
  });


  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that ADD_ITEM action works for shirtListReducer and root reducer', () => {
    const action = {
      type: 'ADD_ITEM',
      name: "Some Brand",
      description: "A floral t-shirt",
      price: "$50",
      quantity: "20",
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterShirtList).toEqual(shirtListReducer(undefined, action));
  });

  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
});