import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {user} from './reducers';
const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            user:user
        }), applyMiddleware(thunk, logger)
    );

    return store;
}

export default ConfigureStore;