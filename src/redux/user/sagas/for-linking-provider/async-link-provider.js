import {put} from 'redux-saga/effects';

import {
        conditionalProvider,
        getCurrentUser} from '../../../../firebase/firebase.utils';

import { linkProviderFailure } from '../../actions/link-provider/failure/link-provider-failure.action';
import { linkProviderSuccess } from '../../actions/link-provider/success/link-provider-success.action';

import {isUserAuthenticated} from '../for-checking-user-session/is-user-authenticated.saga';


export function* asyncLinkProvider({payload: provider}){
    
    try {
        const activeProvider = conditionalProvider(provider);
        const userAuth = yield getCurrentUser();
        const linkedProviders = yield userAuth.linkWithPopup(activeProvider);
        console.log(linkedProviders.providerId);
        yield put(linkProviderSuccess(linkedProviders));
        yield isUserAuthenticated();
    } catch(error) {
        yield put(linkProviderFailure(error));
    }   
}