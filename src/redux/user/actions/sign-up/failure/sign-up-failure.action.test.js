import UserActionTypes from '../../../types/user.types';
import {signUpFailure} from './sign-up-failure.action';

describe('Sign Up Failure action', () => {
    it('should create a Sign Up Failure action', () => {
        const error = 'Sign Up failed!!!';
        expect(signUpFailure(error)).
        toEqual({type: UserActionTypes.SIGN_UP_FAILURE, payload: 'Sign Up failed!!!'})})
})