import {takeLatest, put} from 'redux-saga/effects';
import UserActionTypes from '../../types/user.types';

import {signUpSuccess, signUpFailure} from '../../actions/user.actions';

import {auth} from '../../../../firebase/firebase.utils';

function* signUp({payload: {email, password, displayName}}){
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(
            email,
            password
        );
        yield put(signUpSuccess({user, additionalData:{displayName} }));
    } catch(error){
        yield put(signUpFailure(error));
    }
}

export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}


