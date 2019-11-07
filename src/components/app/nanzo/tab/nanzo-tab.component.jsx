import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import {useStyles} from './nanzo-tab.styles'

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { selectCurrentUser } from '../../../../redux/user/selectors/user.selectors';


import SplashNumber from '../splash-number';
import Splash from '../splash';
import Fixtures from '../fixtures';

import ProgressBar from '../../../../helper/progress-bar';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const NanzoTab = ({allRounds, currentUser}) => {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange} indicatorColor="primary" variant="scrollable" scrollButtons="auto"
          aria-label="scrollable auto tabs example">

            {allRounds.map((round, index) => (
                <Tab label={`Round ${round.round_no}`} {...a11yProps(index)} key={round.id} />
            ))}  
        </Tabs>
      </AppBar>

      {allRounds.map((round, index) => (
      <TabPanel value={value} index={index} key={round.id}>
          <SplashNumber round={round} />

          {currentUser
          ? 
          <div>
            <Splash roundId={round.uid} entrant={currentUser.steemUsername} round={round}/>
            {/* <Fixtures roundId={round.uid} entrant={currentUser.steemUsername} teams={round.teams} scores={round.scores}/> */}
          </div>

          :<ProgressBar />
          }
      </TabPanel>))}

      
  
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(NanzoTab);