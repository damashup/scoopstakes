import UserActionTypes from '../../../types/user.types';
import {linkProviderStart} from './link-provider-start.action';

describe('Link PROVIDER (START) action', () => {
    it('should create a Link PROVIDER Start action', () => {
        expect(linkProviderStart()).
        toEqual({type: UserActionTypes.LINK_PROVIDER_START})})
})