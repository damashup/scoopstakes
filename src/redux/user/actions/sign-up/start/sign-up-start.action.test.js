import UserActionTypes from '../../../types/user.types';
import {signUpStart} from './sign-up-start.action';

describe('Sign Up Start action', () => {
    it('should create an action to sign up with Facebook', () => {
        const userCredentials = {displayName: 'tester', email: 'testuser@gmail.com'};
        expect(signUpStart(userCredentials)).
        toEqual({type: UserActionTypes.SIGN_UP_START, payload: {displayName: 'tester', email: 'testuser@gmail.com'}})})
})