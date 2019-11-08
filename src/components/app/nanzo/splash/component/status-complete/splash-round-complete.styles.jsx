import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import red from '@material-ui/core/colors/red';
import lightGreen from '@material-ui/core/colors/lightGreen';
import { colorPrimaryDark } from '../../../../../page-styles/base-styles';


// material-ui
const lost = red[500]; // #F44336
const won = lightGreen[500] // #8bc34a

export const useStyles = makeStyles(theme =>({
  buttonLost: {
    margin: theme.spacing(1),
    backgroundColor: lost
  },
  buttonWon: {
    margin: theme.spacing(1),
    backgroundColor: won
  },
  input: {
    display: 'none',
  },
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      margin: 10,
      width: 100,
      height: 100,
    }
  }));

// styled components

export const PaperDiv = styled(Paper)`
    && {background-color: ${colorPrimaryDark};}
`;


