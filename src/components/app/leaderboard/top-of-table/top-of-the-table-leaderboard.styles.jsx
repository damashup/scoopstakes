import styled from 'styled-components';
import {
    colorPrimaryDark, 
    colorWhite} from '../../../page-styles/base-styles';

export const TOTTHeader = styled.div`
            background-color: ${colorPrimaryDark};
            color: ${colorWhite};
            font-weight: bold;
            font-size: 2rem;
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        `;