import UserActionTypes from '../../../../types/user.types';
import {emailSignInStart} from './email-sign-in-start.action';

describe('Email/Password Sign In Start action', () => {
    it('should create an action to sign in with Email/Password', () => {
        const emailPassword = {email: 'testuser@gmail.com', password: '123456'};
        expect(emailSignInStart(emailPassword)).
        toEqual({type: UserActionTypes.EMAIL_SIGN_IN_START, payload: {email: 'testuser@gmail.com', password: '123456'}})})
})
