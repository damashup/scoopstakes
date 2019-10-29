import UserActionTypes from '../../../types/user.types';
import {fetchSignInProvidersFailure} from './fetch-sign-in-providers-failure.action';

describe('FETCH Sign In PROVIDERS (FAILURE) action', () => {
    it('should create a FETCH Sign In PROVIDERS Failure action', () => {
        const error = 'FETCH Sign In PROVIDERS failed!!!';
        expect(fetchSignInProvidersFailure(error)).
        toEqual({type: UserActionTypes.FETCH_SIGN_IN_PROVIDERS_FAILURE, payload: 'FETCH Sign In PROVIDERS failed!!!'})})
})