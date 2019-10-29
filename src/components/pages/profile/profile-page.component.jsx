import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import AccountDetailsContainer from './account-details/account-details.container';
import LinkAccountsSectionContainer from './link-accounts-section/link-accounts-section.container';
import {ProfilePageDiv} from './profile-page.styles';
import { selectCurrentUser } from '../../../redux/user/selectors/user.selectors';

import {fetchSignInProvidersStart} from '../../../redux/user/actions/fetch-sign-in-providers/start/fetch-sign-in-providers-start.action';


const ProfilePage = ({currentUser,signInProvidersStart}) => {
    useEffect(() => {signInProvidersStart()},[signInProvidersStart]);
    return (
    <ProfilePageDiv>
     
        {currentUser  
            ? 
            <div>
                <AccountDetailsContainer />
                <LinkAccountsSectionContainer />
            </div> 
            :
            'Please login to link accounts'}
    </ProfilePageDiv>
)}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    signInProvidersStart: () => dispatch(fetchSignInProvidersStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(ProfilePage);
