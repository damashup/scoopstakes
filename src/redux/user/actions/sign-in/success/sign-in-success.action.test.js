import UserActionTypes from '../../../types/user.types';
import {signInSuccess} from './sign-in-success.action';

describe('Sign In Success action', () => {
    it('should create a Sign In Success action', () => {
        const user = {displayName: 'tester', email: 'testuser@gmail.com'};
        expect(signInSuccess(user)).
        toEqual({type: UserActionTypes.SIGN_IN_SUCCESS, payload: {displayName: 'tester', email: 'testuser@gmail.com'}})})
})