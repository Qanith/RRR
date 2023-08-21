import { legacy_createStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';

const store = legacy_createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store