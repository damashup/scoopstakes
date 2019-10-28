import {takeLatest, put} from 'redux-saga/effects';
import UserActionTypes from '../../../types/user.types';
import {asyncFetchSnapshotFromUserAuth} from '../../helper/async-fetch-snapshot-from-user';
import {signInFailure} from '../../../actions/sign-in/failure/sign-in-failure.action';
import {auth, facebookProvider} from '../../../../../firebase/firebase.utils';


function* signInWithFacebook(){
    try {
        const {user} = yield auth.signInWithPopup(facebookProvider);
        yield asyncFetchSnapshotFromUserAuth(user);
    } catch(error) {
        yield put(signInFailure(error));
    }
}

export function* onFacebookSignInStart(){
    yield takeLatest(UserActionTypes.FACEBOOK_SIGN_IN_START, signInWithFacebook);
}
