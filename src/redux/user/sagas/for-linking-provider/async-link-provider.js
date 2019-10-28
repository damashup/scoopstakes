import {put} from 'redux-saga/effects';

import {
        conditionalProvider,
        getCurrentUser} from '../../../../firebase/firebase.utils';
import { linkProviderFailure } from '../../actions/link-provider/link-provider-failure.action';
import { linkProviderSuccess } from '../../actions/link-provider/link-provider-success.action';


export function* asyncLinkProvider({payload: provider}){
    
    try {
        const activeProvider = conditionalProvider(provider);
        console.log(activeProvider);
        const userAuth = yield getCurrentUser();
        const linkedProviders = yield userAuth.linkWithPopup(activeProvider);
        yield put(linkProviderSuccess(linkedProviders));
    } catch(error) {
        yield put(linkProviderFailure(error));
    }   
}