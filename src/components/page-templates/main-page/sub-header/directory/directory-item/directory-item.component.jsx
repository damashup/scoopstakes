import React from 'react';
import {withRouter} from 'react-router-dom';

import {DirectoryItemDiv} from'./directory-item.styles';

const DirectoryItem = ({title, linkUrl, history, match}) => (
        <DirectoryItemDiv onClick={() => history.push(`${match.url}${linkUrl}`)}>
            {title.toUpperCase()}
        </DirectoryItemDiv>
    );

export default withRouter(DirectoryItem);