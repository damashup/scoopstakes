import React from 'react';
import SignInWithFacebook from './sign-in-with-facebook/sign-in-with-facebook.component';
import SignInWithGoogle from './sign-in-with-google/sign-in-with-google.component';
import SignInWithTwitter from './sign-in-with-twitter/sign-in-with-twitter.component';
import SignInWithGitHub from './sign-in-with-github/sign-in-with-github.component';

const SignInWithSocial = () => {
    return (
        <div>
            <SignInWithGoogle />
            <SignInWithTwitter />
            <SignInWithGitHub />
            <SignInWithFacebook />
        </div>
    )
}

export default SignInWithSocial;
