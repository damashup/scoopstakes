import {all, call} from 'redux-saga/effects';

import {onSignOutStart} from './for-sign-out/sign-out.saga';
import {onFacebookSignInStart} from './for-sign-in/with-facebook-start/with-facebook.saga';
import {onGitHubSignInStart} from './for-sign-in/with-github-start/with-github.saga';
import {onGoogleSignInStart} from './for-sign-in/with-google-start/with-google.saga';
import {onTwitterSignInStart} from './for-sign-in/with-twitter-start/with-twitter.saga';
import {onCheckUserSession} from './for-checking-user-session/is-user-authenticated.saga';
import {onEmailSignInStart} from './for-sign-in/with-email-start/on-email-sign-in-start.saga';
import {onSignUpStart} from './for-sign-up/sign-up-start.saga';
import {onSignUpSuccess} from './for-sign-up/sign-up-success.saga';
import {onFetchSignInProviders} from './for-fetching-sign-in-providers/on-fetch-sign-in-providers';
import {onLinkProvider} from './for-linking-provider/on-link-provider'
import {onUnlinkProvider} from './for-unlinking-provider/on-unlink-provider'

export function* userSagas(){
    yield all([
        call(onGitHubSignInStart),
        call(onGoogleSignInStart),
        call(onFacebookSignInStart),
        call(onTwitterSignInStart),
        call(onEmailSignInStart),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onCheckUserSession),
        call(onFetchSignInProviders),
        call(onLinkProvider),
        call(onUnlinkProvider)
    ]);
};
