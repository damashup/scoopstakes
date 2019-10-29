import {put} from 'redux-saga/effects';


import {auth} from '../../../../firebase/firebase.utils';
import {isUserAuthenticated} from '../for-checking-user-session/is-user-authenticated.saga'
import { fetchSignInProvidersSuccess } from '../../actions/fetch-sign-in-providers/success/fetch-sign-in-providers-success.action';
import { fetchSignInProvidersFailure } from '../../actions/fetch-sign-in-providers/failure/fetch-sign-in-providers-failure.action';

export function* asyncFetchSignInProviders(){
    try {
        console.log(`AsyncFetch has started!`);
        const userRef = yield isUserAuthenticated()
        console.log(userRef.email);
        const providers = yield auth.fetchSignInMethodsForEmail(userRef.email);
        console.log(providers);
        yield put(fetchSignInProvidersSuccess(providers));
    } catch(error) {
        yield put(fetchSignInProvidersFailure(error));
    }   
}
