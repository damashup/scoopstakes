import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { colorWhite} from '../../../../../page-styles/base-styles';

// styled components

export const HeaderRow = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TypographyHeader = styled(Typography)`
    && {
      display: flex;
      color: ${colorWhite};}
`;
