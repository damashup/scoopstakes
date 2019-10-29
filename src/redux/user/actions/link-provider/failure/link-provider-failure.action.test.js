import UserActionTypes from '../../../types/user.types';
import {linkProviderFailure} from './link-provider-failure.action';

describe('Link PROVIDER (FAILURE) action', () => {
    it('should create a Link PROVIDER Failure action', () => {
        const error = 'Link PROVIDER failed!!!';
        expect(linkProviderFailure(error)).
        toEqual({type: UserActionTypes.LINK_PROVIDER_FAILURE, payload: 'Link PROVIDER failed!!!'})})
})