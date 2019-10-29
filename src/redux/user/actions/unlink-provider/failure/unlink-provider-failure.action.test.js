import UserActionTypes from '../../../types/user.types';
import {unlinkProviderFailure} from './unlink-provider-failure.action';

describe('Unlink PROVIDER (FAILURE) action', () => {
    it('should create a Unlink PROVIDER Failure action', () => {
        const error = 'Unlinking PROVIDER failed!!!';
        expect(unlinkProviderFailure(error)).
        toEqual({type: UserActionTypes.UNLINK_PROVIDER_FAILURE, payload: 'Unlinking PROVIDER failed!!!'})})
})