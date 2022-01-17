

import { LOCATION_CHANGE } from 'connected-react-router';
import { apply, call, delay, fork, put, select, take, takeEvery } from 'redux-saga/effects'
import { LOAD_USERS, LOAD_USERS__SECCESS } from '../../redusers/people/actions';


export function* loadPeopleList({payload}) {
    const {page, search} = payload;
    console.log('ворк');
    const request = yield call(fetch, `https://swapi.dev/api/people?page=${page}&search=${search}`)
    const data = yield apply(request, request.json);
    console.log(data);
    yield put({
        type: LOAD_USERS__SECCESS,
        payload: data,
    })
}

export function* loadUserOnRouterEnter() {
        while(true) {
            const action = yield take(LOCATION_CHANGE)
            if(action.payload.location.pathname === '/'){
                const state = yield select(s => s.people)
                const {page, search} = state
                yield put({
                    type: LOAD_USERS,
                    payload:  {
                        page: page,
                        search: search 
                    }
                });
            }
        }
}

export default function* peopleSaga() {
    yield fork(loadUserOnRouterEnter);   
    yield takeEvery(LOAD_USERS, loadPeopleList);   
}