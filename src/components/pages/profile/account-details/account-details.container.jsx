import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsUserAccountFetching } from '../../../../redux/user/selectors/user.selectors';
import WithSpinner from '../../../page-elements/spinner/with-spinner/with-spinner.component';
import AccountDetails from './account-details.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsUserAccountFetching
});

const AccountDetailsContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(AccountDetails);

export default AccountDetailsContainer;