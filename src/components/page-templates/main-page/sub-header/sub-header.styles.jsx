import styled from 'styled-components';

import {
    colorPrimary,
    colorPrimaryDark
    } from '../../../page-styles/base-styles';

export const SubHeaderDiv = styled.div`
    padding: 1rem;
    grid-column: 1/ -1;
    background-image: linear-gradient(to left bottom, ${colorPrimary}, ${colorPrimaryDark});
`;