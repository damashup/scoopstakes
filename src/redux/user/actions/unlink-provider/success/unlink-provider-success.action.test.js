import UserActionTypes from '../../../types/user.types';
import {unlinkProviderSuccess} from './unlink-provider-success.action';

describe('Unlink PROVIDER (SUCCESS) action', () => {
    it('should create a unlink PROVIDER Success action', () => {
        const provider = 'twitter.com';
        expect(unlinkProviderSuccess(provider)).
        toEqual({type: UserActionTypes.UNLINK_PROVIDER_SUCCESS, payload: 'twitter.com'})})
})