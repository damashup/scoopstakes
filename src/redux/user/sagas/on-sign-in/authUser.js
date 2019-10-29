import {put, call} from 'redux-saga/effects';

import {signInSuccess, signInFailure, signInMethodsSuccess, signInMethodsFailure} from '../../actions/check-user-session/check-user-session'

import {createUserProfileDocument} from '../../../../firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
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

  export function* updateActiveProvidersInSnapshot(providers){
    try {
      console.log(providers)
      yield put(signInMethodsSuccess(providers))
    }catch(error) {
      yield put(signInMethodsFailure(error));
    }
  }