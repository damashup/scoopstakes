import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsUserAccountFetching } from '../../../redux/user/user.selectors';
import WithSpinner from '../../spinner/with-spinner/with-spinner.component';
import ProfileAccountDetails from './profile-account-details.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsUserAccountFetching
});

const ProfileAccountDetailsContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ProfileAccountDetails);

export default ProfileAccountDetailsContainer;