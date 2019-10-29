import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { selectCurrentUser } from '../../../../redux/user/selectors/user.selectors';

import {
    AccountDetailsDiv,
    AccountDetailsEntry,
    AccountDetailsHeader,
    AccountDetailsKeySpan,
    AccountDetailsValueSpan  
    } from './account-details.styles';

const AccountDetails = ({currentUser}) => {

    return (
        <div>
           {currentUser 
           ?
           <AccountDetailsDiv>
                <AccountDetailsHeader>Account Details</AccountDetailsHeader>
                <AccountDetailsEntry>
                    <AccountDetailsKeySpan>Username: </AccountDetailsKeySpan>
                    <AccountDetailsValueSpan>{currentUser.displayName}</AccountDetailsValueSpan>
                </AccountDetailsEntry>
                <AccountDetailsEntry>
                    <AccountDetailsKeySpan>Email: </AccountDetailsKeySpan>
                    <AccountDetailsValueSpan>{currentUser.email}</AccountDetailsValueSpan>
                    </AccountDetailsEntry>        
           </AccountDetailsDiv>
            
           :
            'Please login to view your profile'
            } 
            
            
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  });

export default connect(mapStateToProps)(AccountDetails)