import { createStore, combineReducers } from 'redux';

import numberReducer from './reducers/numberReducer';

const rootReducer = combineReducers({
    number: numberReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;