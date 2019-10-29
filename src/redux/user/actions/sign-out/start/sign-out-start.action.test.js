import UserActionTypes from '../../../types/user.types';
import {signOutStart}from './sign-out-start.action';

describe('Sign Out Start action', () => {
    it('should create a Sign Out Start action', () => {
        expect(signOutStart()).
        toEqual({type: UserActionTypes.SIGN_OUT_START})})
})