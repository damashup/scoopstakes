import UserActionTypes from '../user-types/user.types';
import * as action from './user.actions';





describe('Sign In Success action', () => {
    it('should create a Sign In Success action', () => {
        const user = {displayName: 'tester', email: 'testuser@gmail.com'};
        expect(action.signInSuccess(user)).
        toEqual({type: UserActionTypes.SIGN_IN_SUCCESS, payload: {displayName: 'tester', email: 'testuser@gmail.com'}})})
})

describe('Sign In Failure action', () => {
    it('should create a Sign In Failure action', () => {
        const error = 'Sign in failed!!!';
        expect(action.signInFailure(error)).
        toEqual({type: UserActionTypes.SIGN_IN_FAILURE, payload: 'Sign in failed!!!'})})
})

describe('checkUserSession action', () => {
    it('should create a checkUserSession action', () => {
        expect(action.checkUserSession()).
        toEqual({type: UserActionTypes.CHECK_USER_SESSION})})
})

describe('Sign Out Start action', () => {
    it('should create a Sign Out Start action', () => {
        expect(action.signOutStart()).
        toEqual({type: UserActionTypes.SIGN_OUT_START})})
})

describe('Sign Out Success action', () => {
    it('should create a Sign Out Success action', () => {
        expect(action.signOutSuccess()).
        toEqual({type: UserActionTypes.SIGN_OUT_SUCCESS})})
})

describe('Sign Out Failure action', () => {
    it('should create a Sign Out Failure action', () => {
        const error = 'Sign out failed!!!';
        expect(action.signOutFailure(error)).
        toEqual({type: UserActionTypes.SIGN_OUT_FAILURE, payload: 'Sign out failed!!!'})})
})

describe('Sign Up Start action', () => {
    it('should create an action to sign up with Facebook', () => {
        const userCredentials = {displayName: 'tester', email: 'testuser@gmail.com'};
        expect(action.signUpStart(userCredentials)).
        toEqual({type: UserActionTypes.SIGN_UP_START, payload: {displayName: 'tester', email: 'testuser@gmail.com'}})})
})

describe('Sign Up Success action', () => {
    it('should create a Sign Up Success action - passing nested objects', () => {
        const userCredentials = {'user': {email: 'testuser@gmail.com'}, 'additionalData': {displayName: 'tester'}};
        expect(action.signUpSuccess(userCredentials)).
        toEqual({type: UserActionTypes.SIGN_UP_SUCCESS, 
            payload: {'user': {email: 'testuser@gmail.com'}, 'additionalData': {displayName: 'tester'}}})})

        it('should create a Sign Up Success action - passing objects', () => {
            const userCredentials = {'user': 'testuser@gmail.com', 'additionalData': 'tester'};
            expect(action.signUpSuccess(userCredentials)).
            toEqual({type: UserActionTypes.SIGN_UP_SUCCESS, 
                payload: {'user': 'testuser@gmail.com', 'additionalData': 'tester'}})})       
})

describe('Sign Up Failure action', () => {
    it('should create a Sign Up Failure action', () => {
        const error = 'Sign Up failed!!!';
        expect(action.signUpFailure(error)).
        toEqual({type: UserActionTypes.SIGN_UP_FAILURE, payload: 'Sign Up failed!!!'})})
})