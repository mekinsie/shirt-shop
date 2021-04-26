import formVisibleReducer from './form-visible-reducer';
import shirtListReducer from './shirt-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterShirtList: shirtListReducer
});

export default rootReducer;

