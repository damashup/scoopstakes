import styled from 'styled-components';
import {
    colorGreyDark3,
    colorGreyLight1, 
    colorGreyLight2, 
    colorGreyLight3} from '../../../page-styles/base-styles';



export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;



export const SearchInput = styled.input`
    
    font-family: inherit;
    font-size: 150%;
    color: inherit;
    background-color: ${colorGreyLight1};
    border: none;
    padding: .7rem 2rem;
    border-radius: 100px;
    width: 90%;

    &:focus {
        outline: none;
        width: 100%;
        background-color: ${colorGreyLight2};
    }

    &:focus + button {
        background-color: ${colorGreyLight2};
    }

    &::-webkit-input-placeholder {
        font-weight: 100;
        color: ${colorGreyLight3};
    }
`;

export const SearchButton = styled.button`
    border: none;
    background-color: ${colorGreyLight1};
    margin-left: -3rem;
    &:focus {
        outline: none;
        background-color: ${colorGreyLight2};
    }

    &:active {
        transform: translateY(2px);
    }
`;

export const SearchIcon = styled.svg`
    width: 1.5rem;
    height: 1.5rem;
    stroke-width: 0;
    stroke: #02024d;
    fill: ${colorGreyDark3};
`;