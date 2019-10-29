import UserActionTypes from '../../../types/user.types';
import {signOutSuccess} from './sign-out-success.action';

describe('Sign Out Success action', () => {
    it('should create a Sign Out Success action', () => {
        expect(signOutSuccess()).
        toEqual({type: UserActionTypes.SIGN_OUT_SUCCESS})})
})
