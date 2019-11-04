import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Typography } from '@material-ui/core';

import {selectCurrentUser} from '../../../../../../redux/user/selectors/user.selectors';


const Profile = ({currentUser}) => (
    <div>
      { currentUser ?
        <div >
          <Avatar alt="User" component={RouterLink} 
            src={`https://steemitimages.com/u/${currentUser.steemUsername}/avatar`} to="/settings" />
          <Typography variant="h4">
            {currentUser.displayName}
          </Typography>
          <Typography variant="body2">
            {currentUser.patreon ? 'Patreon Member' : 'Non-Patreon'}
          </Typography>
        </div>
      : 
        <div>
          <RouterLink to='/signin'>SIGN IN </RouterLink>
      </div>
      }  
   </div>   
  );

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})      

export default connect(mapStateToProps)(Profile);
