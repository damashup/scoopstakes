import UserActionTypes from '../../../types/user.types';
import {fetchSignInProvidersSuccess} from './fetch-sign-in-providers-success.action';

describe('FETCH Sign In PROVIDERS (SUCCESS) action', () => {
    it('should create a FETCH Sign In PROVIDERS Success action', () => {
        const error = 'FETCH Sign In PROVIDERS success!!!';
        expect(fetchSignInProvidersSuccess(error)).
        toEqual({type: UserActionTypes.FETCH_SIGN_IN_PROVIDERS_SUCCESS, payload: 'FETCH Sign In PROVIDERS success!!!'})})
})