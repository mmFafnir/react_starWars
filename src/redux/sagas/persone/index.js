
import { LOCATION_CHANGE } from 'connected-react-router';
import { apply, call, fork, put, select, take, takeEvery } from 'redux-saga/effects';
import { LOAD_PERSONE, LOAD_PERSONE__SECCESS } from '../../redusers/persone/actions';


export function* loadPersoneList({payload}) {
    
    const request = yield call(fetch, `https://swapi.dev/api/people/${payload}/`)
    const data = yield apply(request, request.json);
    yield put({
        type: LOAD_PERSONE__SECCESS,
        payload: data,
    })
}

export function* loadPersoneOnRouterEnter() {
        while(true) {
            const action = yield take(LOCATION_CHANGE);
            const id = action.payload.location.pathname.replaceAll(/\D/g, '');
            if(action.payload.location.pathname === `/people/${id}`){
                const state = yield select(s => s.persone)
                yield put({
                    type: LOAD_PERSONE,
                    payload: id
                });
            }
        }
}

export default function* personeSaga() {
    yield fork(loadPersoneOnRouterEnter);   
    yield takeEvery(LOAD_PERSONE, loadPersoneList);   
}