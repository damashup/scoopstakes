import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { selectCurrentUser } from '../../../redux/user/user.selectors';

import {
    AccountDetailsDiv,
    ProfileSectionHeader   
    } from './profile-account-details.styles';

const ProfileAccountDetails = ({currentUser}) => {

    return (
        <AccountDetailsDiv>
           {currentUser 
           ?
           <div>
                <ProfileSectionHeader>Account Details</ProfileSectionHeader>
                Username: {currentUser.displayName}
           </div>
            
           :
            'Please login to view your profile'
            } 
            
            
        </AccountDetailsDiv>
    )
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  });

export default connect(mapStateToProps)(ProfileAccountDetails)