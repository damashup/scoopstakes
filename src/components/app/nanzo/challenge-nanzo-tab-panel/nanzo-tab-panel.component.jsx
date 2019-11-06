import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import RoundResultsContainer from '../../round/results/round-results.container';

import { selectCurrentUser } from '../../../../redux/user/selectors/user.selectors';

import { RoundNoHeaderPaper, TypographyHeader } from './nanzo-tab-panel.styles';

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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const NanzoTabPanel = ({allRounds, currentUser}) => {
    console.log(currentUser)
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
        {allRounds.map(round => (
            <Tab label={`Round ${round.round_no}`} {...a11yProps(0)} key={round.id} />
        ))}  

        </Tabs>
      </AppBar>

      {allRounds.map((round, index) => {
        
        return (
            <TabPanel value={value} index={index} key={round.id}>

              <RoundNoHeaderPaper square elevation={0}> 
                <TypographyHeader variant="h1" component="h2">Round {round.round_no}</TypographyHeader>
              </RoundNoHeaderPaper>

                {currentUser
                ? <RoundResultsContainer roundId={round.uid} entrant={currentUser.steemUsername} nanzoTab/>
                :<div>Loading...</div>
                }
                
            </TabPanel>
      )})}
  
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})


export default connect(mapStateToProps)(NanzoTabPanel);