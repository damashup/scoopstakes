import {takeLatest, put} from 'redux-saga/effects';
import UserActionTypes from '../../../types/user.types';
import {asyncFetchSnapshotFromUserAuth} from '../../helper/async-fetch-snapshot-from-user';
import {signInFailure} from '../../../actions/sign-in/failure/sign-in-failure.action'
import {auth, githubProvider} from '../../../../../firebase/firebase.utils';

function* signInWithGitHub(){
    try {
        const {user} = yield auth.signInWithPopup(githubProvider);
        yield asyncFetchSnapshotFromUserAuth(user);
    } catch(error) {
        yield put(signInFailure(error));
    }
}

export function* onGitHubSignInStart(){
    yield takeLatest(UserActionTypes.GITHUB_SIGN_IN_START, signInWithGitHub);
}
