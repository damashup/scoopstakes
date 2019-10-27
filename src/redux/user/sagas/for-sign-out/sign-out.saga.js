import {takeLatest, put} from 'redux-saga/effects';
import UserActionTypes from '../../types/user.types';
import {signOutSuccess} from '../../actions/sign-out/success/sign-out-success.action';
import {signOutFailure} from '../../actions/sign-out/failure/sign-out-failure.action';

import {auth} from '../../../../firebase/firebase.utils';

function* signOut(){
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch(error){
        yield put(signOutFailure(error));
    }
}

export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}
