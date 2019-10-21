import styled from 'styled-components';

import {colorGreyDark2} from '../page-template/styles/base-styles';

export const SignInPageDiv = styled.div`
    margin: 0 auto;
    width: 38rem;
    padding: 3rem;
    display: flex;
    flex-direction: column;
`;

export const SignInDividerText = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    grid-column-gap: 1.5rem;
    align-items: center;
    color: ${colorGreyDark2};

        &::before,
        &::after {
            content: "";
            height: 1px;
            display: block;
            border-bottom: solid 1px currentColor;
`;