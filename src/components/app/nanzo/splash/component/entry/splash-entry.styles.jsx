import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { colorPrimaryDark, colorWhite} from '../../../../../page-styles/base-styles';


export const useStyles = makeStyles(theme =>({
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


