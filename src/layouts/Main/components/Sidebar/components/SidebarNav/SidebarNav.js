import React, { forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, Button, colors } from '@material-ui/core';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectDirectorySections} from '../../../../../../redux/directory/directory.selectors';
import {selectCurrentUser} from '../../../../../../redux/user/selectors/user.selectors';
import {signOutStart} from '../../../../../../redux/user/actions/sign-out/start/sign-out-start.action';

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
));

const SidebarNav = props => {
  const {className, signOutStart, sections, currentUser, ...rest } = props;

  const classes = useStyles();

  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}
    >
      {sections.map(page => {
        if((page.private && !currentUser) || (page.publicOnly && currentUser)) return null;
        return (
        <ListItem className={classes.item} disableGutters key={page.title}>
          <Button activeClassName={classes.active} className={classes.button} component={CustomRouterLink} to={page.href}
              onClick={page.signOut ? signOutStart: null}>
            <div className={classes.icon}>{page.icon}</div>
            {page.title}
          </Button>
        </ListItem>
      )})}
    </List>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
  currentUser: selectCurrentUser
})      

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(SidebarNav);
