// we have to create an object that will combine our sagas, because we may have more than one.
import { all } from 'redux-saga/effects'
import userSaga from "./userSaga";

export default function* rootSga () {
    yield all ([
        userSaga(),
        ])
}