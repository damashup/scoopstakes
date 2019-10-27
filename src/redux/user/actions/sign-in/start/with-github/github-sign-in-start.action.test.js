import UserActionTypes from '../../../../types/user.types';
import {githubSignInStart} from './github-sign-in-start.action';

describe('Github Sign In Start action', () => {
    it('should create an action to sign in with Github', () => {
        expect(githubSignInStart()).
        toEqual({type: UserActionTypes.GITHUB_SIGN_IN_START})})
})
