import {put} from 'redux-saga/effects';

import {getCurrentUser} from '../../../../firebase/firebase.utils';

import { unlinkProviderFailure } from '../../actions/unlink-provider/failure/unlink-provider-failure.action';
import { unlinkProviderSuccess } from '../../actions/unlink-provider/success/unlink-provider-success.action';

export function* asyncUnlinkProvider({payload: providerUrl}){
    
    try {
        const userAuth = yield getCurrentUser();
        const unlinkedProviders = yield userAuth.unlink(providerUrl);
        yield put(unlinkProviderSuccess(unlinkedProviders));
    } catch(error) {
        yield put(unlinkProviderFailure(error));
    }   
}