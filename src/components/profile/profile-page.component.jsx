import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import ProfileAccountDetailsContainer from './profile-account-details/profile-account-details.container'

import {
    ProfilePageDiv,
    LinkedAccountsDiv,
    NotificationsSettingsDiv    
    } from './profile-page.styles';

const ProfilePage = () => {

    
    return (
        <ProfilePageDiv>
            
            <ProfileAccountDetailsContainer />
            
            <LinkedAccountsDiv></LinkedAccountsDiv>
            <NotificationsSettingsDiv></NotificationsSettingsDiv>

        </ProfilePageDiv>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  });

export default connect(mapStateToProps)(ProfilePage);
