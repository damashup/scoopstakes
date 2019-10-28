import {takeLatest} from 'redux-saga/effects';
import UserActionTypes from '../../types/user.types';
import {asyncLinkProvider} from './async-link-provider';


export function* onLinkProvider(){
    yield takeLatest(UserActionTypes.LINK_PROVIDER_START, asyncLinkProvider);
}