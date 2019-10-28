import {takeLatest, put} from 'redux-saga/effects';

import UserActionTypes from '../../types/user.types';

import {signInFailure} from '../../actions/sign-in/failure/sign-in-failure.action';
import {getCurrentUser} from '../../../../firebase/firebase.utils';

import {asyncFetchSnapshotFromUserAuth} from '../helper/async-fetch-snapshot-from-user';

export function* isUserAuthenticated(){
    try {
        console.log('attempting authentication');
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield asyncFetchSnapshotFromUserAuth(userAuth);  
        return userAuth;
    } catch(error) {
        yield put(signInFailure(error));
    }
     
}

export function* onCheckUserSession(){
    console.log('onCheckUserSession is fired!')
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}