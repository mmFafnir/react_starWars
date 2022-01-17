

import { apply, call, delay, fork, put, select, take, takeEvery } from 'redux-saga/effects'
import { LOAD, LOAD_SECCESS } from '../../redusers/load/actions';



export function* loadList({payload}) {
    
    const request = yield call(fetch, `${payload}`)
    const data = yield apply(request, request.json);
    yield put({
        type: LOAD_SECCESS,
        payload: data,
    })
}

export default function* loadSaga() {
    yield takeEvery(LOAD, loadList);   
}