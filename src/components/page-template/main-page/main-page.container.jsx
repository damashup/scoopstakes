import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../../redux/user/user.selectors';
import WithSpinner from '../../spinner/with-spinner/with-spinner.component';
import MainPage from './main-page.component';

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  });

const MainPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(MainPage);

export default MainPageContainer;