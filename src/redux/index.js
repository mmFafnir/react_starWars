import {createStore, applyMiddleware} from 'redux';
import createSageMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import reducer, { history } from './redusers';
import rootSaga from './sagas';

const sageMiddleware = createSageMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(
        routerMiddleware(history),
        sageMiddleware
    )
);
sageMiddleware.run(rootSaga)

export default store