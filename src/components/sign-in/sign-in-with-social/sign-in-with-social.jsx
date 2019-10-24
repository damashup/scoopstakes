import React from 'react'
import SignInWithFacebook from './sign-in-with-facebook/sign-in-with-facebook.component'
import SignInWithGoogle from './sign-in-with-google/sign-in-with-google.component'

const SignInWithSocial = () => {
    return (
        <div>
            <SignInWithGoogle />
            <SignInWithFacebook />
        </div>
    )
}

export default SignInWithSocial;
