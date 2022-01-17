import {createStore, applyMiddleware} from 'redux';
import createSageMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import reducer, { history } from './redusers';
import rootSaga from './sagas';

const sageMiddleware = createSageMiddleware();

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(
            routerMiddleware(history),
            sageMiddleware
        )
    )
);
sageMiddleware.run(rootSaga)

export default store