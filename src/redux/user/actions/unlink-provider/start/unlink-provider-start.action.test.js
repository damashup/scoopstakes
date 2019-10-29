import UserActionTypes from '../../../types/user.types';
import {unlinkProviderStart} from './unlink-provider-start.action';

describe('Unlink PROVIDER (START) action', () => {
    it('should create a unlink PROVIDER Start action', () => {
        expect(unlinkProviderStart()).
        toEqual({type: UserActionTypes.UNLINK_PROVIDER_START})})
})