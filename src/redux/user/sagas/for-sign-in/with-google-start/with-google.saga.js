import {takeLatest, put} from 'redux-saga/effects';
import UserActionTypes from '../../../types/user.types';
import {asyncFetchSnapshotFromUserAuth} from '../../helper/async-fetch-snapshot-from-user';
import {signInFailure} from '../../../actions/sign-in/failure/sign-in-failure.action';
import {auth, googleProvider} from '../../../../../firebase/firebase.utils';

function* signInWithGoogle(){
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield asyncFetchSnapshotFromUserAuth(user);
    } catch(error) {
        yield put(signInFailure(error));
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
