import {put, call} from 'redux-saga/effects';


import {signInSuccess} from '../../actions/sign-in/success/sign-in-success.action';
import {signInFailure} from '../../actions/sign-in/failure/sign-in-failure.action';

import {createUserProfileDocument} from '../../../../firebase/firebase.utils';

export function* asyncFetchSnapshotFromUserAuth(userAuth, additionalData) {
    try {
      console.log(additionalData)
      const userRef = yield call(
        createUserProfileDocument,
        userAuth,
        additionalData
      );
      const userSnapshot = yield userRef.get();
      yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
      yield put(signInFailure(error));
    }
}
