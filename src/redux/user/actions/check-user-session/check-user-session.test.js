import UserActionTypes from '../../types/user.types';
import {checkUserSession} from './check-user-session';

describe('checkUserSession action', () => {
    it('should create a checkUserSession action', () => {
        expect(checkUserSession()).
        toEqual({type: UserActionTypes.CHECK_USER_SESSION})})
})
