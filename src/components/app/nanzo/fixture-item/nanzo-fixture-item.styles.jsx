import { makeStyles } from '@material-ui/core/styles';
import { grey, blueGrey, lightGreen } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';

import styled from 'styled-components';
import Box from '@material-ui/core/Box';




const won = lightGreen[500] // #8bc34a

export const useStyles = makeStyles(theme => ({
    root: {
      ...theme.typography.subtitle2,
      flexGrow: 1,
      alignItems: 'center'
    },
    paper: {
      padding: theme.spacing(1),
      margin: 'auto',
      textAlign: 'center',
      color: theme.palette.text.primary,       
      },
    paperRight: {
      padding: theme.spacing(1),
      margin: 'auto',
      textAlign: 'right',
      color: theme.palette.text.primary,
    } ,
    paperLeft: {
      padding: theme.spacing(1),
      margin: 'auto',
      textAlign: 'left',
      color: theme.palette.text.primary,
    },
    paperRes: {
      color: grey[50],  
      backgroundColor: blueGrey[200] 
    },
    winColor: {
      color: won
    }
  }));


  // styled component

  export const TeamLogoAvatar = styled(Avatar)`
        height: 50rem;
        width: auto;
`;

export const TeamBox = styled(Box)`
  && {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

`;