import {takeLatest, put} from 'redux-saga/effects';
import UserActionTypes from '../../../types/user.types';
import {asyncFetchSnapshotFromUserAuth} from '../../helper/async-fetch-snapshot-from-user';
import {signInFailure} from '../../../actions/sign-in/failure/sign-in-failure.action';
import {auth, twitterProvider} from '../../../../../firebase/firebase.utils';

function* signInWithTwitter(){
    try {
        const {user} = yield auth.signInWithPopup(twitterProvider);
        yield asyncFetchSnapshotFromUserAuth(user);
    } catch(error) {
        yield put(signInFailure(error));
    }
}

export function* onTwitterSignInStart(){
    yield takeLatest(UserActionTypes.TWITTER_SIGN_IN_START, signInWithTwitter);
}
