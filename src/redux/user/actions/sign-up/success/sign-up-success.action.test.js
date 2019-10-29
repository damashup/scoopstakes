import UserActionTypes from '../../../types/user.types';
import {signUpSuccess, } from './sign-up-success.action';


describe('Sign Up Success action', () => {
    it('should create a Sign Up Success action - passing nested objects', () => {
        const userCredentials = {'user': {email: 'testuser@gmail.com'}, 'additionalData': {displayName: 'tester'}};
        expect(signUpSuccess(userCredentials)).
        toEqual({type: UserActionTypes.SIGN_UP_SUCCESS, 
            payload: {'user': {email: 'testuser@gmail.com'}, 'additionalData': {displayName: 'tester'}}})})

        it('should create a Sign Up Success action - passing objects', () => {
            const userCredentials = {'user': 'testuser@gmail.com', 'additionalData': 'tester'};
            expect(signUpSuccess(userCredentials)).
            toEqual({type: UserActionTypes.SIGN_UP_SUCCESS, 
                payload: {'user': 'testuser@gmail.com', 'additionalData': 'tester'}})})       
})