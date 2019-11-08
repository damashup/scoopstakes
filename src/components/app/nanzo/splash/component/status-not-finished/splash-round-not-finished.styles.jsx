import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { colorPrimaryDark, colorWhite} from '../../../../../page-styles/base-styles';

// styled components

export const PaperDiv = styled(Paper)`
    && {background-color: ${colorPrimaryDark};}
`;

export const TypographyHeaderNotEntered = styled(Typography)`
    && {
      padding: 2.5rem;
      color: ${colorWhite};}
`;
