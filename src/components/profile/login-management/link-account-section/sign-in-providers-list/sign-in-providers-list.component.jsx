import React from 'react';
import {connect} from 'react-redux';
import {fetchSignInProvidersStart} from '../../../../../redux/user/actions/fetch-sign-in-providers/start/fetch-sign-in-providers-start.action';

const SignInProvidersList = ({fetchSignInProviders}) => {
    fetchSignInProviders();
    return (
        <div>
            
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchSignInProviders: () => dispatch(fetchSignInProvidersStart())
})


export default connect(null, mapDispatchToProps)(SignInProvidersList)
