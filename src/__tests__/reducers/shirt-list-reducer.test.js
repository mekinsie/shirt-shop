import shirtListReducer from '../../reducers/shirt-list-reducer';

describe('shirtListReducer', () => {

  // let action;
  // const currentState = {
    
  // }

  test('Should return default state if no action type is recognized', () => {
    expect(shirtListReducer({}, { type: null })).toEqual({});
  });


})