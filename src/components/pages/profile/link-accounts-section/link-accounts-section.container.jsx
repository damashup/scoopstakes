import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsUserAccountFetching} from '../../../../redux/user/selectors/user.selectors';
import WithSpinner from '../../../page-elements/spinner/with-spinner/with-spinner.component';
import LinkAccountsSection from './link-accounts-section.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsUserAccountFetching,
});

const LinkAccountsContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(LinkAccountsSection);

export default LinkAccountsContainer;