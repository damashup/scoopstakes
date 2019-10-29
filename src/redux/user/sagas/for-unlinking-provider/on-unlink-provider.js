import {takeLatest} from 'redux-saga/effects';
import UserActionTypes from '../../types/user.types';
import {asyncUnlinkProvider} from './async-unlink-provider';


export function* onUnlinkProvider(){
    yield takeLatest(UserActionTypes.UNLINK_PROVIDER_START, asyncUnlinkProvider);
}