import UserActionTypes from '../../../types/user.types';
import {fetchSignInProvidersStart} from './fetch-sign-in-providers-start.action';

describe('FETCH Sign In PROVIDERS (START) action', () => {
    it('should create a FETCH Sign In PROVIDERS Start action', () => {
        const error = 'FETCH Sign In PROVIDERS succeeded!!!';
        expect(fetchSignInProvidersStart()).
        toEqual({type: UserActionTypes.FETCH_SIGN_IN_PROVIDERS_START})})
})