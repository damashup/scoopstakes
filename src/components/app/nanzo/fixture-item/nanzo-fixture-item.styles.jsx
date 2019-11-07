import { makeStyles } from '@material-ui/core/styles';
import { grey, blueGrey, lightGreen } from '@material-ui/core/colors';

const won = lightGreen[500] // #8bc34a

export const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      alignItems: 'center'
    },
    paper: {
      padding: theme.spacing(1),
      margin: 'auto',
      textAlign: 'center',
      color: theme.palette.text.secondary,       
      },
    paperRight: {
      padding: theme.spacing(1),
      margin: 'auto',
      textAlign: 'right',
      color: theme.palette.text.secondary,
    } ,
    paperLeft: {
      padding: theme.spacing(1),
      margin: 'auto',
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
    paperRes: {
      color: grey[50],  
      backgroundColor: blueGrey[200] 
    },
    winColor: {
      color: won
    } 
  }));