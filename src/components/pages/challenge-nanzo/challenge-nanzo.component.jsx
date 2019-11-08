import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import PageTitle from '../../page-elements/page-title/page-title.component';

import Container from '@material-ui/core/Container';
import {ChallengeNanzoPageDiv} from './challenge-nanzo.styles';
import NanzoTab from '../../app/nanzo/tab';
import SplashNumber from '../../app/nanzo/splash-number';
import { selectCurrentUser } from '../../../redux/user/selectors/user.selectors';

const ChallengeNanzoPage = ({match}) => {
    const title = 'Challenge Nanzo';
    console.log(match)
    console.log(match.params.challengeNanzoRoundId)
    return (
        <ChallengeNanzoPageDiv>
          <Container maxWidth="lg">
            <PageTitle title={title} />
            <NanzoTab roundId={match.params.challengeNanzoRoundId}/>
          </Container>
        </ChallengeNanzoPageDiv>
    )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(ChallengeNanzoPage);
