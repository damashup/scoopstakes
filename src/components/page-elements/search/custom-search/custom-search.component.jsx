import React from 'react';

import {
    SearchButton, 
    SearchContainer,
    SearchIcon,
    SearchInput} from './custom-search.styles';

const Searchbox = () => {
    return (
        <SearchContainer>
            <SearchInput 
                type="text" 
                className="input" 
                placeholder="Search..." 
            />
            <SearchButton>
                <SearchIcon>
                    <use xlinkHref="/sprite.svg#icon-magnifying-glass" />
                </SearchIcon>
            </SearchButton>
            
        </SearchContainer>
    )
}

export default Searchbox;
