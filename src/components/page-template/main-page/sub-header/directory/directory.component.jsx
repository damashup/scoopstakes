import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectDirectorySections} from '../../../../../redux/directory/directory.selectors';

import {DirectoryDiv} from './directory.styles';

import DirectoryItem from './directory-item/directory-item.component';

const Directory = ({sections}) => (
        <DirectoryDiv>
            {sections.map(({id, ...otherSectionProps}) => (
                <DirectoryItem key={id} {...otherSectionProps}/>
            ))}
        </DirectoryDiv>
        )

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})      

export default connect(mapStateToProps)(Directory);