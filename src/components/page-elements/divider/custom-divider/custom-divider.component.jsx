import React from 'react'

import {CustomDividerDiv} from './custom-divider.styles';

const CustomDivider = ({children, ...otherProps}) => {
    return (
        <CustomDividerDiv>{children}</CustomDividerDiv>
    )
}

export default CustomDivider;
