import {put} from 'redux-saga/effects';

import {fetchSignInProvidersSuccess} from '../../actions/fetch-sign-in-providers/fetch-sign-in-providers-success.action'
import {fetchSignInProvidersFailure} from '../../actions/fetch-sign-in-providers/fetch-sign-in-providers-failure.action'
import {auth} from '../../../../firebase/firebase.utils';
import {isUserAuthenticated} from '../for-checking-user-session/is-user-authenticated.saga'

export function* asyncFetchSignInProviders(){
    try {
        const userRef = yield isUserAuthenticated()
        console.log(userRef.email);
        const providers = yield auth.fetchSignInMethodsForEmail(userRef.email);
        console.log(providers);
        yield put(fetchSignInProvidersSuccess(providers));
    } catch(error) {
        yield put(fetchSignInProvidersFailure(error));
    }   
}
