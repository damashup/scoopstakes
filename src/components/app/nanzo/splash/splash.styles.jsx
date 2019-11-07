import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import red from '@material-ui/core/colors/red';
import lightGreen from '@material-ui/core/colors/lightGreen';
import { colorPrimaryDark, colorWhite} from '../../../page-styles/base-styles';


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

export const HeaderRow = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const VersusAvatar = styled(Avatar)`
        height: 150rem;
        width: auto;
`;

export const TypographyHeader = styled(Typography)`
    && {
      display: flex;
      color: ${colorWhite};}
`;

export const TypographyHeaderNotEntered = styled(Typography)`
    && {
      padding: 2.5rem;
      color: ${colorWhite};}
`;

