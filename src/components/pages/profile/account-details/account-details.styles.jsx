import styled from 'styled-components';
import {colorGreyDark3, profileHeader, textBig, profileKeyText} from '../../../page-styles/base-styles';
   

export const AccountDetailsDiv = styled.div`
`;

export const AccountDetailsHeader = styled.h2`
    ${profileHeader}
`
export const AccountDetailsEntry = styled.div`
    color: ${colorGreyDark3}

    display: grid;
    grid-template-columns: 50px, 1fr;
    align-items: center;
`;

export const AccountDetailsKeySpan = styled.span`
    ${profileKeyText}
`;

export const AccountDetailsValueSpan = styled.span`${textBig}`;

