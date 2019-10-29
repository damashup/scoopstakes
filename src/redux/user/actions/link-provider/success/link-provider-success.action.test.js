import UserActionTypes from '../../../types/user.types';
import {linkProviderSuccess} from './link-provider-success.action';

describe('Link PROVIDER (SUCCESS) action', () => {
    it('should create a Link PROVIDER Success action', () => {
        const providers = '["twitter.com", "github.com", "facebook.com"]';
        expect(linkProviderSuccess(providers)).
        toEqual({type: UserActionTypes.LINK_PROVIDER_SUCCESS, payload: '["twitter.com", "github.com", "facebook.com"]'})})
})