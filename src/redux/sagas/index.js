import { all, spawn } from "redux-saga/effects";
// import loadSaga from "./load";
import peopleSaga from "./people";
import personeSaga from "./persone";


export default function* rootSaga() {
    const sagas = [peopleSaga, personeSaga];

    yield all(sagas.map(saga => spawn(saga)));
}
