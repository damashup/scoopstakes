import UserActionTypes from '../../../../types/user.types';
import {twitterSignInStart} from './twitter-sign-in-start.action';

describe('Twitter Sign In Start action', () => {
    it('should create an action to sign in with Twitter', () => {
        expect(twitterSignInStart()).
        toEqual({type: UserActionTypes.TWITTER_SIGN_IN_START})})
})
