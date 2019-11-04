import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {textBig, 
        textMedium,
        linkDefault} from '../../../page-styles/base-styles';



export const SignInWithEmailPasswordDiv = styled.div`
    
`;

export const SignInWithEmailPasswordHeading = styled.h2`
    font-size: 200%;
    ${textBig}
`

export const SignInTextDiv = styled.div`
    ${textMedium}
    padding-top: 2rem;
`;

export const SignUpLink = styled(Link)`
    font-weight: bolder;
    ${linkDefault}
`;